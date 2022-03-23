// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// Action Creators
export function createBucket(bucket){
    return {type : CREATE, bucket};
}
//초기값 
const ititialState = {
    list : ["영화관 가기","수족관 가기"]
}

// Reducer
export default function reducer(state = ititialState, action = {}) {
switch (action.type) {
// do reducer stuff
    case "bucket/CREATE": {
        const new_bucketlist = [...state.list,action.bucket];
        return {list : new_bucketlist}
    }
    default: return state;
}
}
// // side effects, only as applicable
// // 미들웨어 (서버에서 데이터를 가져온다던가하는 부분임.)
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }