import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
        <Link href='/signin' className='flex items-center header-button'>
            <UserIcon className="h-8 w-8"  />
            <span className="font-bold">Hello, Sign in</span>
            </Link> 

            <Link className="header-button" href="/cart">
            <ShoppingCartIcon className='h-8 w-8' />
            <span className="font-bold">Cart</span>            
            </Link>
        </nav>
    
    </div>
  )
}
