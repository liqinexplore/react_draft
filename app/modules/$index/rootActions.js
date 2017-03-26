import TYPES from './rootTypes.js' // 引入action类型名常量
import { PRO_URL, PRO_USER,PRO_REQUEST } from 'publicDatas';
import { message } from 'antd'

export const getAllMenuActions = () => {
  return(dispatch) => {
    // console.log("getAllMenuActions");
    PRO_REQUEST.ajax.fetchData(
      PRO_URL.permission.menuTreeActions.getAllMenuActions,
      {},
      (data)=>{
        dispatch(gotAllMenuActions(data));
      }
    );
  }
}
const gotAllMenuActions = (theData) => {
  // console.log("rootActions gotAllMenuActions",JSON.stringify(theData));
  if(theData.rc==="0"){
    return (dispatch, getState) => {
      dispatch(getAllMenuActionsSuccess(theData.data))
    }
  }else {
    message.error("获取所有菜单和操作项发生错误！",5);
  }
}
const getAllMenuActionsSuccess=(allMenuActions )=>{
  // console.log("getAllMenuActionsSuccess",allMenuActions);
  return {
    type:TYPES.PERMISSION.ACTIONS.GET_ALL_MENU_ACTIONS,
    allMenuActions
  }
}

export const getAllActions = () => {
  return(dispatch) => {
    PRO_REQUEST.ajax.fetchData(
      PRO_URL.permission.menuTreeActions.getAllActions,
      {},
      (data)=>{
        dispatch(gotAllActions(data));
      }
    );
  }
}
const gotAllActions = (theData) => {
  // console.log("rootActions gotAllActions",JSON.stringify(theData));
  if(theData.rc==="0"){
    return (dispatch, getState) => {
      dispatch(getAllActionsSuccess(theData.data))
    }
  }else {
    message.error("获取所有操作项发生错误！",5);
  }
}
const getAllActionsSuccess=(allActions)=>{
  return {
    type:TYPES.PERMISSION.ACTIONS.GET_ALL_ACTIONS,
    allActions
  }
}

export const getAllMyOwnActions = (tokenID) => {
  return(dispatch) => {
    PRO_REQUEST.ajax.fetchData(
      PRO_URL.permission.menuTreeActions.getAllMyOwnActions,
      {tokenID},
      (data)=>{
        dispatch(gotAllMyOwnActions(data));
      }
    );
  }
}
const gotAllMyOwnActions = (theData) => {
  // console.log("rootActions gotAllMyOwnActions",JSON.stringify(theData));
  if(theData.rc==="0"){
    return (dispatch, getState) => {
      dispatch(getAllMyOwnActionsSuccess(theData.data))
    }
  }else {
    message.error("获取所有操作项发生错误！",5);
  }
}
const getAllMyOwnActionsSuccess=(allMyOwnActions)=>{
  return {
    type:TYPES.PERMISSION.ACTIONS.GET_ALL_MY_OWN_ACTIONS,
    allMyOwnActions
  }
}

export const getAllSupport = () => {
  return(dispatch) => {
    PRO_REQUEST.ajax.fetchData(
      PRO_URL.permission.menuTreeActions.getAllSupport,
      {},
      (data)=>{
        dispatch(gotAllSupport(data));
      }
    );
  }
}
const gotAllSupport = (theData) => {
  //console.log("rootActions gotAllSupport",JSON.stringify(theData));
  if(theData.rc==="0"){
    return (dispatch, getState) => {
      dispatch(getAllSupportSuccess(theData.data))
    }
  }else {
    message.error("获取所有公共内容支撑项发生错误！",5);
  }
}
const getAllSupportSuccess=(allSupport)=>{
  return {
    type:TYPES.PERMISSION.ACTIONS.GET_ALL_SUPPORTS,
    allSupport
  }
}

export const getMyOwnedAuthMeunItem = (selectedUserID) => {
  console.log("getMyOwnedAuthMeunItem",selectedUserID);
  return (dispatch, getState) => {
    PRO_REQUEST.ajax.fetchData(PRO_URL.permission.browserAuth.getUserOwnedAuthById, {
      "user_id": selectedUserID
    }, (data) => {
      dispatch(gotMyOwnedAuthMeunItem(data));
    });
  }
}
const gotMyOwnedAuthMeunItem = (theData) => {
  console.log("gotMyOwnedAuthMeunItem theData",theData);
  if (theData.rc == "0") {
    return (dispatch) => {
      dispatch(getMyOwnedAuthMeunItemSuccess(theData.data));
      let firstId=(()=>{
        let menuKeys=Object.keys(theData.data);
        return theData.data[menuKeys[0]].id;
      })()
      dispatch(setOpenSubMenuId(firstId));
    }
  } else {
    message.error("获取您的菜单数据过程中发生错误！请参考：" + theData.des, 5);
  }
}
const getMyOwnedAuthMeunItemSuccess = (OwnedMenuAuth) => {
  return {type: TYPES.PERMISSION.MENU_AUTN.GET_MY_OWNED_AUTH_DATA, OwnedMenuAuth}
}
export const setSelectedMenuId = (selectedId) => {
  // console.log("我看看",TYPES.PUBLICDATA.SET_CURRENT_MENU_ID);
  return {type: TYPES.PUBLICDATA.SET_CURRENT_MENU_ID, selectedId}
}
export const setOpenSubMenuId = (selectedId) => {
  return {type: TYPES.PUBLICDATA.SET_CURRENT_OPEN_MENU_ID, selectedId}
}

export const getPfopPictures = (pictures) => {
  // console.log("getPfopPictures",pictures);
  return (dispatch, getState) => {
    PRO_REQUEST.ajax.fetchData(PRO_URL.QINIU_PFOP, {
      "list": pictures
    }, (data) => {
      dispatch(gotPfopPictures(data));
    });
  }
}
const gotPfopPictures = (theData) => {
  // console.log("gotPfopPictures theData",theData);
  if (theData.rc == "0") {
    return (dispatch) => {
      dispatch(gotPfopPicturesSuccessfully(theData.data));
      dispatch(reducePfopingStatus(theData.data));
    }
  } else {
    message.error("持久保存图片过程中发生错误！请参考：" + theData.des, 5);
  }
}
const gotPfopPicturesSuccessfully = (persistentData) => {
  return {type: TYPES.PUBLICDATA.SET_QINIU_PFOP_SUCCESS, persistentData}
}
const reducePfopingStatus = (persistentPfopingData)=>{
  return (dispatch, getState) => {
    let pfopingObj=getState().rootData.publicData.publicData.persistentData;
    for (var i = 0; i < pfopingObj.length; i++) {
      let id=pfopingObj[i].persistid;

      //做异步请求
      PRO_REQUEST.ajax.requestData(PRO_URL.QINIU_PFOPING_STATUS, {id}, function (data) {
      // console.log("SET_QINIU_PFOP_SUCCESS data",data)
      }, function (err) {
      // console.log("SET_QINIU_PFOP_SUCCESS error",err)
    },"GET");

    }
  }
}
