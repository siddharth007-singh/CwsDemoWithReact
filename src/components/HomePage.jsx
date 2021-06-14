import React,{useState} from "react";
import CourceL from './CourceLayout';
import Banner from "./Banner";
import Category from './Category';
import CatList from '../CatList';



function HomePage(){
    const [cat, cardset] = useState(CatList);
    return(
        <React.Fragment>
            <Banner/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CourceL/>
                        <h3 className="font-weight-bold mt-5">Top categories</h3>
                    </div>
                    {cat.map((value,key)=>(
                        <div className="col-lg-3">
                            <Category
                                id = {value.id}
                                img = {value.image}
                                Cat = {value.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomePage;