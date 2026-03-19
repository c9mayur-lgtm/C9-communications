import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-[16px] font-extrabold whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-[#5D00D6] text-white shadow-xl shadow-purple-900/10 hover:bg-[#4B00AD] hover:shadow-2xl hover:shadow-purple-900/20 [&_svg]:text-white",
        outline:
          "border-2 border-[#5D00D6] bg-transparent text-[#5D00D6] hover:bg-[#5D00D6] hover:text-white",
        secondary:
          "bg-secondary text-[#5D00D6] hover:bg-secondary/80",
        ghost:
          "hover:bg-muted hover:text-[#0c1024]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-[#5D00D6] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-8 gap-2.5",
        xs: "h-9 px-4 text-[13px] gap-1.5 rounded-xl font-bold",
        sm: "h-11 px-6 text-[14px] gap-2 rounded-xl",
        lg: "h-16 px-10 gap-3 text-[17px]",
        icon: "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
