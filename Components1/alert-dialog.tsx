"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./button";
import { motion, AnimatePresence } from "framer-motion";

interface AlertDialogContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertDialogContext = React.createContext<AlertDialogContextType | undefined>(undefined);

interface AlertDialogProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      if (!isControlled) setUncontrolledOpen(value);
      if (onOpenChange) {
        const newValue = typeof value === "function" ? value(open) : value;
        onOpenChange(newValue);
      }
    },
    [isControlled, onOpenChange, open]
  );

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// Trigger
const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(
  ({ asChild = false, children, onClick, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error("AlertDialogTrigger must be used within an AlertDialog");

    const { setOpen } = context;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(true);
      if (onClick) onClick(e);
    };

    if (asChild) {
      return (
        <>
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, { ...child.props, ref, onClick: handleClick })
              : child
          )}
        </>
      );
    }

    return <button ref={ref} type="button" onClick={handleClick} {...props}>{children}</button>;
  }
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

// Overlay
const AlertDialogOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error("AlertDialogOverlay must be used within an AlertDialog");
    const { open } = context;

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            className={cn("fixed inset-0 z-50 bg-black/80", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
          />
        )}
      </AnimatePresence>
    );
  }
);
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// Content
const AlertDialogContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error("AlertDialogContent must be used within an AlertDialog");
    const { open, setOpen } = context;

    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!open) return;
      const handleClickOutside = (event: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, setOpen]);

    return (
      <AnimatePresence>
        {open && (
          <>
            <AlertDialogOverlay />
         <motion.div
  ref={(node) => {
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    contentRef.current = node;
  }}
  className={cn(
    "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
    className
  )}
  initial={{ y: "-48%", opacity: 0, scale: 0.95 }}
  animate={{ y: "-50%", opacity: 1, scale: 1 }}
  exit={{ y: "-48%", opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.2, ease: "easeInOut" }}
  {...(() => {
    if (!props || typeof props !== "object") return {};
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationComplete,
      onTransitionEnd,
      ...safeProps
    } = props as { [key: string]: any };
    return safeProps;
  })()}
>
  {children}
</motion.div>



          </>
        )}
      </AnimatePresence>
    );
  }
);
AlertDialogContent.displayName = "AlertDialogContent";

// Header, Footer, Title, Description
const AlertDialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h2 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
);
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
);
AlertDialogDescription.displayName = "AlertDialogDescription";

// Action buttons
const AlertDialogAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error("AlertDialogAction must be used within an AlertDialog");
    const { setOpen } = context;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false);
      if (onClick) onClick(e);
    };

    return <button ref={ref} className={cn(buttonVariants(), className)} onClick={handleClick} {...props} />;
  }
);
AlertDialogAction.displayName = "AlertDialogAction";

const AlertDialogCancel = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const context = React.useContext(AlertDialogContext);
    if (!context) throw new Error("AlertDialogCancel must be used within an AlertDialog");
    const { setOpen } = context;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false);
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogOverlay,
};
