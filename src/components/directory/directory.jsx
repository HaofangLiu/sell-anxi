import React from 'react';
import MenuItem from "../../components/menu-item/menu-item"
import './directory.style.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : [
                {
                    title:'菜的真实',
                    imageUrl:'https://www.zhifure.com/upload/images/2017/12/1915942488.jpg',
                    id: 1
                },
                {
                    title:'闲出病来',
                    imageUrl:'https://p.21zx.net/pics/200128/20012GF322445.gif',
                    id: 2
                },
                {
                    title:'薪资太低',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfssQl4_fdGc8_8iw7F15fxIWhrYZRE4DSYM5Xf2RKb1c1mk1e&s',
                    id: 3
                },
                {
                    title:'没有朋友',
                    imageUrl:'https://img.uooyoo.com/img2016/8/22/2016082257885077.jpg',
                    size:'large',
                    id: 4
                },
                {
                    title:'学不动了',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSvo_RuM29hiTotk-cucI7tmAVbIBZexc7oDe4zm0YrBEYHM&s',
                    size:'large',
                    id: 5
                },
            ]

        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size}) => {
                        return <MenuItem key={id} title={title} imageUrl={imageUrl} size = {size}/>
                    })
                }
            </div>
        )
    }
}

export default Directory



