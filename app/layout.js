

import { ToastContainer } from 'react-toastify'
import '../public/main.scss'
//import '../public/assets/css/styles.css'
//import '../public/assets/font-awesome/css/font-awesome.min.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>LobsmartCard</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" sizes="any" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap" />
        <meta property="og:title" content="LobsmartCard" />
        <meta property="og:type" content="Website" />
        <meta property="og:description" content="LOBS Smart Personalized NFC Cards is digitally interactive business Cards it can be customized with User Information" />
        <meta property="og:image" content="https://lobsmartcard.vercel.app/favicon.png" />
        <meta property="og:url" content="https://lobsmartcard.vercel.app" />

      </head>
      <body className='' >
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />
        {children}


      </body>

    </html>
  )
}
