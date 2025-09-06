import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "sm" | "md" | "lg" | "xl" | "xxl" | "icon"
  asChild?: boolean
}

const buttonVariants = {
  variant: {
    "primary": "bg-primary text-white hover:bg-[#0d7456] active:bg-[#0a5d47] disabled:bg-gray-300 disabled:text-gray-500 shadow-sm",
    "outline": "border-2 border-transparent bg-transparent text-primary hover:border-primary active:bg-[#0d7456] disabled:border-gray-300 disabled:text-gray-400 transition-all duration-200",
    "secondary": "bg-[#edfcf6] text-primary hover:bg-[#d4f7e6] active:bg-[#bbf2d8] disabled:bg-gray-100 disabled:text-gray-400",
  },
  size: {
    default: "h-11 px-4 py-2",
    sm: "h-9 rounded-[8px] px-3",
    md: "h-11 rounded-[8px] px-[16px]",
    lg: "h-12 rounded-[8px] px-[16px]", 
    xl: "h-[52px] rounded-[8px] px-[18px] text-base font-bold",
    xxl: "h-[60px] rounded-xl px-[18px] text-lg font-bold",
    icon: "h-10 w-10",
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variantClasses = buttonVariants.variant[variant]
    const sizeClasses = buttonVariants.size[size]

    return (
      <button
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
