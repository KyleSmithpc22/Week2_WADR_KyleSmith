import React from 'react';
import ReplyButton from './components/reply-button';
import CommentBox from './components/comment'
import CNT from './components/commenter-name-time'

let e = React.createElement;

export default class Comment extends React.Component {
    render() {

        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                <CNT />
                </div>

            <div className="card-body">
                <CommentBox />
            </div>

            <div className="card-footer">
                <ReplyButton />
            </div>

            </div>
        )
    }
}