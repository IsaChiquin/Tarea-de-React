import React from "react";
import '../Style/minecraftcard.css'

function MinecraftCard({id,image,title,content}){
    return(
        <div className="minecraftcard" key={id}>
            <div className="complete_card">

                <div className="card_head">
                    <img src={image} alt={title}/>
                
                    <div className="card_body">
                        <p className="title_body">{title}</p>
                        <p className="content">{content}</p>
                    </div>
                    <div className="purplebar">
                        <a href="#"></a>
                            <button className="button">MÁS INFORMACIÓN</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MinecraftCard;