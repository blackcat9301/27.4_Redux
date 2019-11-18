import { arrowFunctionExpression } from "../../../Library/Caches/typescript/3.4.3/node_modules/@types/babel-types";

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const data = {
    comments: [
        {
            id: '12741danx1278',
            text: 'Nowy komentarz',
            votes: 0
        },
        {
            id: '12741danb1278',
            text: 'Stary komentarz',
            votes: 42
        }
    ],
    users: [
        {
            id: '121jk6d89h2d',
            firstName: 'Jan',
            lastName: 'Nowak',
            comments: ['12741danb1278'],
        }
    ]
};

//kreator akcji
function addComment(action) {
    return {
        type: ADD_COMMENT,
        text: action.text,
        id: uuid.v4()
    }
}

function editComment(action) {
    return {
        type: EDIT_COMMENT,
        text: action.text,
        id: action.id
    }
}

function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}

export { ADD_COMMENT, addComment, EDIT_COMMENT, editComment, THUMB_UP_COMMENT, thumbUpComment, THUMB_DOWN_COMMENT, thumbDownComment };

