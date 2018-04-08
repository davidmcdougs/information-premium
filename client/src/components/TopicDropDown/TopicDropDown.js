import React, {Component} from "react";
import {Dropdown} from "semantic-ui-react";

// friendOptions = [
//   {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
//   },
//  ...
// ]
const topicOptions = [
        {
            text: 'science',
            value: 'science',
            image: {avatar: true, src: "https://cdn0.iconfinder.com/data/icons/education-flat-7/128/22_Atom-128.png"}
        },
        {
            text: 'sports',
            value: 'sports',
            image: {avatar: true, src: "https://cdn0.iconfinder.com/data/icons/education-flat-7/128/36_Football-128.png"}
        },
        {
            text: 'home care',
            value: 'home care',
            image: {avatar: true, src: "https://cdn0.iconfinder.com/data/icons/education-flat-7/128/18_School_Building-128.png"}
        }
    ]


const TopicDropDown = () => (
  <Dropdown placeholder='Select a Topic' fluid selection options={topicOptions} />
)

export default TopicDropDown;