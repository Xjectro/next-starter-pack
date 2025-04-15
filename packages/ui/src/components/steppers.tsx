import React, {
  useState,
  useRef,
  useMemo,
  useLayoutEffect,
  useCallback,
  ReactNode,
  Children,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@repo/ui/lib/utils";
import { PenIcon, CheckIcon } from "@repo/ui/components/Icons";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@repo/ui/components/Button";

interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  children: React.ReactNode;
  className?: string;
  defaultValue?: number;
  onChange?: (step: number) => void;
  onComplate?: () => void;
}

export function Steppers({
  children,
  defaultValue = 1,
  className,
  onChange = () => {},
  onComplate = () => {},
  ...props
}: StepperProps) {
  const [value, setValue] = useState(defaultValue);
  const [direction, setDirection] = useState(0);

  const stepsArray = useMemo(() => Children.toArray(children), [children]);
  const totalSteps = stepsArray.length;
  const isComplete = useMemo(() => value > totalSteps, [value, totalSteps]);
  const isLastStep = useMemo(() => value === totalSteps, [value, totalSteps]);

  const updateStep = useCallback(
    (newStep: number) => {
      setValue(newStep);
      if (newStep > totalSteps) onComplate();
      else onChange(newStep);
    },
    [onChange, onComplate, totalSteps],
  );

  const handleBack = useCallback(() => {
    if (value > 1) {
      setDirection(-1);
      updateStep(value - 1);
    }
  }, [value, updateStep]);

  const handleNext = useCallback(() => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(value + 1);
    }
  }, [value, isLastStep, updateStep]);

  const handleComplete = useCallback(() => {
    setDirection(1);
    updateStep(totalSteps + 1);
  }, [updateStep, totalSteps]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full",
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full rounded-lg bg-surface-100 border !border-surface-300 shadow-xl">
        <div className="flex items-center w-full p-8">
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            return (
              <React.Fragment key={stepNumber}>
                <StepIndicator
                  step={stepNumber}
                  value={value}
                  onClick={(clicked) => {
                    setDirection(clicked > value ? 1 : -1);
                    updateStep(clicked);
                  }}
                />
                {index < totalSteps - 1 && (
                  <StepConnector isComplete={value > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isComplete={isComplete}
          value={value}
          direction={direction}
          className="relative overflow-hidden"
        >
          {stepsArray[value - 1]}
        </StepContentWrapper>

        {!isComplete && (
          <div className="px-8 pb-8">
            <div
              className={cn(
                "flex mt-10",
                value !== 1 ? "justify-between" : "justify-end",
              )}
            >
              {value !== 1 && (
                <Button variant="surface" size="md" onClick={handleBack}>
                  <ArrowLeftIcon />
                </Button>
              )}
              <Button
                size="md"
                onClick={isLastStep ? handleComplete : handleNext}
              >
                {isLastStep ? <CheckIcon /> : <ArrowRightIcon />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface StepContentWrapperProps {
  isComplete: boolean;
  value: number;
  direction: number;
  children: ReactNode;
  className?: string;
}

function StepContentWrapper({
  isComplete,
  value,
  direction,
  children,
  className,
}: StepContentWrapperProps) {
  const [height, setHeight] = useState(0);

  return (
    <motion.div
      className={className}
      animate={{ height: isComplete ? 0 : height }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isComplete && (
          <SlideTransition
            key={value}
            direction={direction}
            onReady={setHeight}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction: number;
  onReady: (h: number) => void;
}

function SlideTransition({
  children,
  direction,
  onReady,
}: SlideTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) onReady(ref.current.offsetHeight);
  }, [children, onReady]);

  return (
    <motion.div
      ref={ref}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="absolute left-0 right-0 top-0"
    >
      {children}
    </motion.div>
  );
}

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? "50%" : "-50%", opacity: 0 }),
};

export function StepItem({ children }: { children: ReactNode }) {
  return <div className="px-8">{children}</div>;
}

function StepIndicator({
  step,
  value,
  onClick,
}: {
  step: number;
  value: number;
  onClick: (step: number) => void;
}) {
  const status =
    value === step ? "active" : value < step ? "inactive" : "complete";

  return (
    <motion.div
      onClick={() => step !== value && onClick(step)}
      className="cursor-pointer"
      animate={status}
      initial={false}
    >
      <motion.div
        className="flex size-8 items-center justify-center rounded-full font-bold"
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: "var(--color-surface-300)",
            color: "var(--color-typography-500)",
          },
          active: {
            scale: 1,
            backgroundColor: "var(--color-solid-500)",
            color: "var(--color-solid-foreground)",
          },
          complete: {
            scale: 1,
            backgroundColor: "var(--color-solid-500)",
            color: "var(--color-solid-foreground)",
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {status === "complete" ? (
          <CheckIcon className="size-4" />
        ) : status === "active" ? (
          <PenIcon className="size-4" />
        ) : (
          <span className="font-medium">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }: { isComplete: boolean }) {
  return (
    <div className="relative mx-2 h-px flex-1 overflow-hidden rounded-full bg-surface-500">
      <motion.div
        className="absolute left-0 top-0 h-full"
        variants={{
          incomplete: { width: 0, backgroundColor: "var(--color-surface-500)" },
          complete: {
            width: "100%",
            backgroundColor: "var(--color-solid-500)",
          },
        }}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
