import React from "react";
import {} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Catcard from './Cource';
import Lists from '../list';


function CategoryFilterLayout(){
    let {category} = useParams();
    const Search = Lists.filter(p =>  p.category == category);
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                {Search.map((value, key)=>(
                    <div className="col-lg-3">
                        <Catcard
                            id = {value.id}
                            image = {value.image}
                            title = {value.title}
                            cource_by = {value.cource_by}
                            price = {value.price}
                        />
                    </div>
                ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default CategoryFilterLayout;