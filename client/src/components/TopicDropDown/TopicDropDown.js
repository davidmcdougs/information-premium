import React from "react";
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
            text: 'home care',
            value: 'home care',
            image: {avatar: true, src: "https://cdn0.iconfinder.com/data/icons/education-flat-7/128/18_School_Building-128.png"}
        },
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
            text: 'social',
            value: "social",
            image: {avatar: true, src: "https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_14-128.png"}
        },
        {
            text: 'other',
            value: 'other',
            image: {avatar: true, src: "https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_13-128.png"}
        },
        {
            text: 'art',
            value: 'art',
            image: {avatar: true, src: "https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/art-256.png"}
        }
    ]


const TopicDropDown = (props) => (
  <Dropdown placeholder='Select a Topic' fluid selection options={topicOptions} onChange={props.onChange} name="questionTopic" />
)

export default TopicDropDown;