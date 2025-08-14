(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5d58e6b9-8be7-4acf-9af5-a91112bbfe13",e._sentryDebugIdIdentifier="sentry-dbid-5d58e6b9-8be7-4acf-9af5-a91112bbfe13")}catch{}})();const a=()=>typeof window<"u",o=()=>{try{return a()?"localStorage"in window&&window.localStorage!==null:!1}catch{return!1}},r=({funcName:e,name:t,value:n})=>{try{return o()?localStorage[e](t,n):void 0}catch{return}},c={getItem:e=>r({funcName:"getItem",name:e}),setItem:(e,t)=>r({funcName:"setItem",name:e,value:t}),clear:()=>r({funcName:"clearItem"})},f=`
  query fetchIdentity {
    globalIdentityProfile {
      firstName
    }
  }
`;export{f as F,c as l};
//# sourceMappingURL=apollo-constants.CVCHsjQc.js.map
