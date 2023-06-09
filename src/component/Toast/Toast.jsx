import "./Toast.css";

import { useContext, useEffect } from "react";

import { AiFillInfoCircle, AiFillWarning } from "react-icons/ai";
import { IoMdCheckmarkCircle /*IoMdClose*/ } from "react-icons/io";

import { DisplayContext } from "../../context/DisplayContext";

export function Toast() {
  const { toastList, deleteToast } = useContext(DisplayContext);

  function getToastNotificationIcon(type, color) {
    let icon = (
      <IoMdCheckmarkCircle className="ToastIcon" style={{ color: color }} />
    );
    switch (type) {
      case "info": {
        icon = (
          <AiFillInfoCircle className="ToastIcon" style={{ color: color }} />
        );
        break;
      }
      case "warning": {
        icon = <AiFillWarning className="ToastIcon" style={{ color: color }} />;
        break;
      }
      case "success": {
        <IoMdCheckmarkCircle className="ToastIcon" style={{ color: color }} />;
        break;
      }
    }
    return icon;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  return (
    <div className="ToastListContainer">
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className="ToastNotification"
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <div
            className="ToastHorizontalLine"
            style={{ backgroundColor: toast.color }}
          ></div>
          {/* <div
            className="ToastCloseConatiner"
            onClick={() => deleteToast(toast.id)}
          >
            <IoMdClose
              className="ToastCloseBtn"
              style={{ color: toast.color }}
            />
          </div> */}
          <div className="IconWithDescription">
            {getToastNotificationIcon(toast.type, toast.color)}
            <div className="ToastNotificationDetails">
              <div className="ToastNotificationTitle">{toast.title}</div>
              <div className="ToastNotificationDescription">
                {toast.description}
              </div>
            </div>
          </div>
          {/* <div
            className="ToastProgressLine"
            style={{ backgroundColor: toast.color }}
          ></div> */}
        </div>
      ))}
    </div>
  );
}
