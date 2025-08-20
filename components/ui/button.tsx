import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "primary" | "white-outline" | "white-filled"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-[#3685fb] bg-background text-primary hover:bg-[#3685fb]/10 active:bg-[#3685fb]/20 disabled:border-gray-300 disabled:text-gray-400",
    secondary: "bg-secondary text-quaternary-foreground hover:bg-secondary/80",
    ghost: "text-[#414651] hover:bg-[#414651] hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    primary: "bg-primary text-white hover:bg-[#0f4bc7] active:bg-[#0a3ba3] disabled:bg-gray-300 disabled:text-gray-500",
    "white-outline": "border border-white bg-transparent text-white hover:bg-background/10 active:bg-background/20 disabled:border-gray-400 disabled:text-gray-400",
    "white-filled": "bg-background text-[#3685fb] hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400",
  },
  size: {
    default: "h-11 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
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
