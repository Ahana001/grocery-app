// export function BillDetails() {
//   const { state } = useContext(DataContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);

//   const cart = state.cartlist;

//   const cartLength = cart.length;
//   function getCartTotal() {
//     const total = cart.reduce((accumulator, menuItem) => {
//       menuItem.item_variant.map((variant) => {
//         if (variant.carted) {
//           accumulator = accumulator + variant.price * variant.quantity;
//         }
//       });
//       return accumulator;
//     }, 0);
//     const grandTotal = total - 0.0;
//     return { grandTotal, total };
//   }
//   return (
//     <div className="RightCartBillContainer">
//       {/* <div className="CouponContainer">
//       <div> Have A Coupon ?</div>
//       <button>Apply</button>
//     </div> */}
//       <div className="BillSummeryContainer">
//         <div className="BillHeader">Bill Details</div>
//         <div className="HorizontaLine"></div>
//         <ul>
//           <li>
//             <div className="BillListHeader">MRP</div>
//             <div>Rs. {parseFloat(getCartTotal().total).toFixed(2)}</div>
//           </li>
//           <li>
//             <div className="BillListHeader">Delivery charge</div>
//             <div className="Delivery">
//               <span>Rs. 15</span> FREE
//             </div>
//           </li>
//         </ul>
//         <div className="GrandTotalContainer">
//           <div className="GrandTotalHeader">Grand total</div>
//           <div className="GrandTotal">
//             Rs. {parseFloat(getCartTotal().grandTotal).toFixed(2)}
//           </div>
//         </div>
//       </div>
//       <div className="CheckOutButton">CHECK OUT</div>
//     </div>
//   );
// // }
