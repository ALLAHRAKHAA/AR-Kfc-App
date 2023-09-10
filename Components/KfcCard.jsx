import React from "react";

export default function KfcCard({item, addToCart}) {
    return (
        <div >
        <div className="card" style={{ width: "18rem",  height: "30rem", color: "white"}}>
            <img src={item.image} className="card-img-top" alt="kfc card" style={{height: "20rem", background: "#2f3f4f" }} />
            <div className="card-body" style={{ background: "#2f3f4f"}}>
                <div style={{height: "5rem", background: "#2f3f4f"}} >
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    {item.desc}
                </p>
                </div>
                <div style={{background: "#2f3f4f" }}>
                    <p>
                <span className="badge text-bg-info">Rs.{item.price}</span>
                </p>
                <button 
                className="badge" style={{background:"#078aa8", color:"white"}} 
                onClick={() => addToCart(item)}
                >
                    Add To Order
                    </button>
                    </div>
            </div>
        </div>
        </div>
        )

}