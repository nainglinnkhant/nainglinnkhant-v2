"use client"

import {
  DialogContent,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog"

import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog"
import { Globe } from "@/components/ui/globe"

interface GlobeDialogProps {
  children: React.ReactNode
}

export function GlobeDialog({ children }: GlobeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
        >
          <DialogTitle className="sr-only">Globe</DialogTitle>
          <Globe className="mx-auto w-[400px] max-w-[80vw] sm:w-[500px] md:w-[600px]" />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
