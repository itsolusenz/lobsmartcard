// import React, { useState } from 'react';


// function DLMode() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
   
      
//         <button onClick={toggleDarkMode}>
//            {isDarkMode ? <i class="fa fa-sun-o" style={{color:"white"}} aria-hidden="true"></i> : <i class="fa fa-moon-o" aria-hidden="true"  style={{color:"black"}}></i>} 
//         </button>
      
//       <main style={{height:"100vh"}}>
//         <p>This is the main content of the app.</p>
//         <div className="box"></div>
//       </main>
//     </div>
//   );
// }

// export default DLMode;



// ====NextJS====
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../header.module.css'

export default function DLMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.app} ${isDarkMode ? styles['dark-theme'] : styles['light-theme']}`}>
      <Head>
        <title>Next.js Dark/Light Mode Toggle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dark/Light Mode Toggle</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="fa fa-sun-o" style={{ color: 'white' }} aria-hidden="true"></i>
          ) : (
            <i className="fa fa-moon-o" style={{ color: 'black' }} aria-hidden="true"></i>
          )}
        </button>
        <p className={styles.description}>This is the main content of the app.</p>
        <div className={styles.box}></div>
      </main>
    </div>
  );
}
