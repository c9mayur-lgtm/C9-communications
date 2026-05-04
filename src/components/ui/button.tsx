import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-[14px] font-semibold whitespace-nowrap transition-all duration-500 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-[#5D00D6] text-white shadow-xl shadow-purple-900/10 hover:bg-[#4B00AD] border border-white/10 hover:ring-4 hover:ring-white/5 [&_svg]:text-white",
        outline:
          "border-2 border-[#5D00D6] bg-transparent text-[#5D00D6] hover:bg-[#5D00D6]/10",
        secondary:
          "bg-white border border-gray-100 text-[#0c1024] hover:bg-gray-50 hover:shadow-lg",
        ghost:
          "hover:bg-muted hover:text-[#0c1024]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-[#5D00D6] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 gap-2.5",
        xs: "h-9 px-4 text-[14px] gap-1.5",
        sm: "h-11 px-6 text-[14px] gap-2",
        lg: "h-14 px-10 gap-3 text-[16px]",
        icon: "size-11",
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
  asChild,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
