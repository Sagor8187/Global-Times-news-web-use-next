"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navlink({href,children}) {

  const path = usePathname()
  
  const isactive = path === href
  return (
    <Link  className={isactive ? "border-b-2 border-purple-500" : ""} href={href}>{children}</Link>
  )
}
