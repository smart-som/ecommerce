import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

export default handler;

// import React from 'react';
//  import { usePaystackPayment } from 'react-paystack';
  
//   const config = {
//       reference: (new Date()).getTime().toString(),
//       email: "userInfo{",
//       publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
//   };
  
//   // you can call this function anything
//   const onSuccess = (reference) => {
//     // Implementation for whatever you want to do with reference and after success call.
//     console.log(reference);
//   };

//   // you can call this function anything
//   const onClose = () => {
//     // implementation for  whatever you want to do when the Paystack dialog closed.
//     console.log('closed')
//   }

//   const PaystackHookExample = () => {
//       const initializePayment = usePaystackPayment(config);
//       return (
//         <div>
//             <button onClick={() => {
//                 initializePayment(onSuccess, onClose)
//             }}>Paystack Hooks Implementation</button>
//         </div>
//       );
//   };
  
//   function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <PaystackHookExample />
//       </div>
//     );
//   }
  
//   export default App;