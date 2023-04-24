import next from 'next'
import Footer from './components/footer'
import './globals.css'
import Header from './components/header'
import HomePage from './page'
export const metadata = {
  title: 'Doris portfolio website',
  description: 'Software engineer',
  keywords:
    'java developer,web developer,sofware engineer,frontend developer,backend developer,python developer,java engineer,javaScript developer,html,CSS,Bootstrap,tailwind css,React'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className='customised-container'>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
