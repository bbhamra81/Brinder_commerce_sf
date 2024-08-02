import{jsx as s,jsxs as k}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as ct,classes as lt}from"@dropins/tools/lib.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{g as ft,c as dt,a as gt}from"./createCustomerAddress.js";import{useState as p,useEffect as ht,useCallback as G}from"@dropins/tools/preact-hooks.js";import{s as tt,b as Ft,c as Ut}from"./simplifyTransformAttributesForm.js";import{v as yt,u as pt,a as bt}from"./usePasswordValidationMessage.js";import{a as _t}from"./getCustomerToken.js";import{p as et,E as rt}from"./getStoreConfig.js";import{c as H,g as Tt,u as Nt,T as xt,F as Lt,B as it}from"./useInLineAlert.js";import{InLineAlert as Pt,InputPassword as Et,Field as Q,Checkbox as X}from"@dropins/tools/components.js";import{S as St}from"./SkeletonLoader.js";import{E as wt}from"./EmailConfirmationForm.js";import{useText as vt}from"@dropins/tools/i18n.js";const st=(t,e)=>e!=null&&e.length?t.map(a=>{var i;const o=(i=e.find(({code:b})=>b===a.code))==null?void 0:i.defaultValue;return o?{...a,defaultValue:o}:a}):t,Mt=({inputsDefaultValueSet:t,fieldsConfigForApiVersion1:e,apiVersion2:a})=>{const[o,i]=p([]);return ht(()=>{(async()=>{var h;if(a){const r=await ft("customer_account_create");if((h=r==null?void 0:r.fields)!=null&&h.length)if(t!=null&&t.length){const n=st(r==null?void 0:r.fields,t);i(n)}else i(r==null?void 0:r.fields)}else{const r=tt(Ft),n=tt(e),u=st(r,t);i(e&&e.length?n:u)}})()},[a,e,t]),{fieldsListConfigs:o}},qt=t=>{switch(t){case"true":case"on":return!0;case"false":case"off":return!1;default:return t}},At=(t,e)=>{if(!e)return t;const a={};a.custom_attributes=[];for(const o in t)Object.prototype.hasOwnProperty.call(Ut,o)?a[o]=t[o]:a.custom_attributes.push({attribute_code:o,value:qt(t[o])});return a},Ct=({addressesData:t,translations:e,isEmailConfirmationRequired:a,apiVersion2:o=!0,passwordConfigs:i,isAutoSignInEnabled:b,routeRedirectOnSignIn:h,routeSignIn:r,onErrorCallback:n,onSuccessCallback:u,setActiveComponent:l,handleSetInLineAlertProps:f,routeRedirectOnEmailConfirmationClose:L})=>{const[O,w]=p(""),[F,m]=p(!1),[c,T]=p({userName:"",status:!1}),[v,d]=p(""),[M,q]=p(!1),[V,U]=p(!1),[A,C]=p(!0),P=G(({target:y})=>{C(y.checked)},[]),B=G(()=>{if(H(l)){l("signInForm");return}H(r)&&(window.location.href=r())},[l,r]),W=G(y=>{d(y)},[]),j=G(()=>{f({}),d(""),H(L)?window.location.href=L():(m(!1),l==null||l("signInForm"))},[f,L,l]);return{isKeepMeLogged:A,userEmail:O,showEmailConfirmationForm:F,isSuccessful:c,isClickSubmit:M,signUpPasswordValue:v,isLoading:V,onSubmitSignUp:async(y,$)=>{var Z,z,D;if(f({}),U(!0),!$){q(!0),U(!1);return}const I=o?"createCustomerV2":"createCustomer",_=Tt(y.target),{email:E,password:S,is_subscribed:at}=_,ot=(i==null?void 0:i.requiredCharacterClasses)||0,ut=(i==null?void 0:i.minLength)||1;if(!yt(S,ot)||ut>(S==null?void 0:S.length)){q(!0),U(!1);return}const mt=At({..._,is_subscribed:!!at||!1},o),{data:N,errors:x}=await dt(mt,o),K=((z=(Z=N==null?void 0:N.createCustomer)==null?void 0:Z.customer)==null?void 0:z.firstname)||"";if(x&&(x!=null&&x.length))f==null||f({type:"error",text:x[0].message}),n==null||n(x),et(rt.CREATE_ACCOUNT_EVENT,{updateProfile:!1}),w(E);else{const J={email:"",...N==null?void 0:N[I]};if(et(rt.CREATE_ACCOUNT_EVENT,{email:J==null?void 0:J.email,updateProfile:!0}),a||!b){if(u==null||u({userName:K,status:!0}),a){(D=y.target)==null||D.reset(),d(""),m(!0),w(E),U(!1);return}if(!b){U(!1),T({userName:K,status:!0});return}}const g=await _t({email:E,password:S,translations:e,handleSetInLineAlertProps:f,onErrorCallback:n});if(g!=null&&g.userName){if(t!=null&&t.length)for(const R of t)try{await gt(R)}catch(nt){console.error(e.failedCreateCustomerAddress,R,nt)}H(h)?window.location.href=h():(u==null||u({userName:g==null?void 0:g.userName,status:!0}),T({userName:g==null?void 0:g.userName,status:!0}))}else u==null||u({userName:K,status:!0}),T({userName:K,status:!0})}U(!1)},signInButton:B,handleSetSignUpPasswordValue:W,onKeepMeLoggedChange:P,handleHideEmailConfirmationForm:j}},Zt=({addressesData:t,formSize:e="default",inputsDefaultValueSet:a,fieldsConfigForApiVersion1:o,apiVersion2:i=!0,isAutoSignInEnabled:b=!0,displayTermsOfUseCheckbox:h=!1,displayNewsletterCheckbox:r=!1,hideCloseBtnOnEmailConfirmation:n=!1,routeRedirectOnEmailConfirmationClose:u,routeRedirectOnSignIn:l,routeSignIn:f,onErrorCallback:L,onSuccessCallback:O,setActiveComponent:w,slots:F})=>{const m=vt({title:"Auth.SignUpForm.title",buttonPrimary:"Auth.SignUpForm.buttonPrimary",buttonSecondary:"Auth.SignUpForm.buttonSecondary",privacyPolicyDefaultText:"Auth.SignUpForm.privacyPolicyDefaultText",subscribedDefaultText:"Auth.SignUpForm.subscribedDefaultText",keepMeLoggedText:"Auth.SignUpForm.keepMeLoggedText",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage",failedCreateCustomerAddress:"Auth.SignUpForm.failedCreateCustomerAddress"}),{passwordConfigs:c,isEmailConfirmationRequired:T}=pt(),{fieldsListConfigs:v}=Mt({fieldsConfigForApiVersion1:o,apiVersion2:i,inputsDefaultValueSet:a}),{inLineAlertProps:d,handleSetInLineAlertProps:M}=Nt(),{isKeepMeLogged:q,userEmail:V,showEmailConfirmationForm:U,isSuccessful:A,isClickSubmit:C,signUpPasswordValue:P,isLoading:B,onSubmitSignUp:W,signInButton:j,handleSetSignUpPasswordValue:Y,onKeepMeLoggedChange:y,handleHideEmailConfirmationForm:$}=Ct({addressesData:t,translations:m,isEmailConfirmationRequired:T,apiVersion2:i,passwordConfigs:c,isAutoSignInEnabled:b,routeRedirectOnSignIn:l,routeSignIn:f,onErrorCallback:L,onSuccessCallback:O,setActiveComponent:w,handleSetInLineAlertProps:M,routeRedirectOnEmailConfirmationClose:u}),{isValidUniqueSymbols:I,defaultLengthMessage:_}=bt({password:P,isClickSubmit:C,passwordConfigs:c}),E=!T&&(t==null?void 0:t.length);return!v.length&&i?s("div",{className:`auth-signUpForm ${e} skeleton-loader`,"data-testid":"SignUpForm",children:s(St,{activeSkeleton:"signUpForm"})}):A.status&&(F!=null&&F.SuccessNotification)?s(ct,{"data-testid":"successNotificationTestId",name:"SuccessNotification",slot:F==null?void 0:F.SuccessNotification,context:{isSuccessful:A}}):U?s(wt,{formSize:e,userEmail:V,inLineAlertProps:d,hideCloseBtnOnEmailConfirmation:n,handleSetInLineAlertProps:M,onPrimaryButtonClick:$}):k("div",{className:lt(["auth-signUpForm",e]),"data-testid":"SignUpForm",children:[s(xt,{text:m.title,bottomLine:!1,className:"auth-signUpForm__title"}),d.text?s(Pt,{className:"auth-signUpForm__notification",type:d.type,variant:"secondary",heading:d.text,icon:d.icon}):null,k(Lt,{submitCallback:W,className:"auth-signUpForm__form",isLoading:B,name:"signUp_form",fieldsConfig:v,children:[s(Et,{validateLengthConfig:_,className:"auth-signUpForm__form__item",autoComplete:"current-password",name:"password",minLength:c==null?void 0:c.minLength,error:I==="error"||(_==null?void 0:_.status)==="error"||C&&P.length<=0,defaultValue:P,uniqueSymbolsStatus:I,requiredCharacterClasses:c==null?void 0:c.requiredCharacterClasses,onValue:Y,children:E?s("div",{className:"auth-signUpForm__automatic-login",children:s(Q,{children:s(X,{name:"",placeholder:m.keepMeLoggedText,label:m.keepMeLoggedText,checked:q,onChange:y})})}):null}),r||h?k("div",{className:"auth-signUpForm__item auth-signUpForm__checkbox",children:[r?s(Q,{children:s(X,{"data-testid":"isSubscribed",name:"is_subscribed",placeholder:m.subscribedDefaultText,label:m.subscribedDefaultText})}):null,h?s(Q,{children:s(X,{"data-testid":"privacyPolicy",name:"privacyPolicy",placeholder:m.privacyPolicyDefaultText,label:m.privacyPolicyDefaultText})}):null]}):null,k("div",{className:"auth-signUpForm-buttons",children:[s(it,{type:"button",variant:"tertiary",style:{padding:0},buttonText:m.buttonSecondary,enableLoader:!1,onClick:j}),s(it,{type:"submit",buttonText:m.buttonPrimary,variant:"primary",enableLoader:B})]})]}),s("div",{id:"createCustomerV2"})]})};export{Zt as S};