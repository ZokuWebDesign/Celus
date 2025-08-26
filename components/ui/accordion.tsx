import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bg-transparent data-[state=open]:bg-white border border-[#35B48B] rounded-xl overflow-hidden transition-colors duration-200", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-center py-5 px-6 transition-all hover:bg-gray-50/50",
        className
      )}
      {...props}
    >
      <div className="flex-1 text-left">
        <span className="text-lg font-medium text-[#101828] leading-[140%]">
          {children}
        </span>
      </div>
      <div className="relative w-8 h-8 flex-none ml-4">
        {/* Plus icon (closed state) */}
        <svg 
          className="absolute inset-0 w-full h-full transition-opacity group-data-[state=closed]:opacity-100 group-data-[state=open]:opacity-0"
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle 
            cx="16" 
            cy="16" 
            r="13" 
            stroke="#35B48B" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M16 10v12M10 16h12" 
            stroke="#35B48B" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
        
        {/* Minus icon (open state) */}
        <svg 
          className="absolute inset-0 w-full h-full transition-opacity group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100"
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle 
            cx="16" 
            cy="16" 
            r="13" 
            stroke="#35B48B" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M10 16h12" 
            stroke="#35B48B" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    {/* Divider */}
    <div className="flex justify-center items-center px-6">
      <div className="flex-1 h-px bg-[#D5D7DA]"></div>
    </div>
    
    {/* Content */}
    <div className={cn("py-4 px-6", className)}>
      <div className="text-base font-normal text-[#101828] leading-[160%]">
        {children}
      </div>
    </div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
