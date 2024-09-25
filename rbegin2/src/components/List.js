import React from 'react';

const List = ({item}) => {
    return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4 mt-4'>
                <center>
                <ul className="list-group border border-3 border-black" id="listii">
                   
                        {item.map((it=><li>{it}</li>))}
       
</ul>
                </center>
            </div>
            <div className='col-sm-4'></div>
        </div>
        
    </div>
    );
}

export default List;
