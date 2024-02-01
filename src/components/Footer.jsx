import React from 'react'

export default function Footer() {
  return (
    <footer style={{backgroundColor: "lightsteelblue"}} className='bottom-0 w-full h-32 flex items-center justify-center text-center'>
        <section className='flex flex-col'>
            <a href=''>About</a>
            <a href=''>Contact</a>
            <a href=''>Legal</a>
            <a href=''>Terms and Conditions</a>
        </section>
    </footer>
  )
}
