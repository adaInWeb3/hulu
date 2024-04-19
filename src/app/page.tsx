"use client";

import { useRef } from "react";

export default function Home() {
  const modalRef = useRef(null);
  const onConnectButtonClick = async () => {
    console.log("Connect button clicked");

    if (typeof (window as any).okxwallet === "undefined") {
      console.log("OKX is installed!");
      (modalRef?.current as any)?.showModal();
      return;
    }
    try {
      let accounts = await (window as any).bitcoin.requestAccounts();
      console.log("connect success", accounts);
    } catch (e) {
      console.log("connect failed");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 ">
      <div className="flex w-full">
        <button className="btn ml-auto" onClick={onConnectButtonClick}>
          Connect OKX Wallet
        </button>
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Tips:</h2>
          <p>This tool is only only available for OKX extension versions.!</p>
        </div>
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tips!</h3>
          <p className="py-4">
            Please install the OKX Wallet extension to use this feature.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
