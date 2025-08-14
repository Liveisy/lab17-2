import{i as d}from"./_baseFor.Bzwhonox.js";import{t as o,r as p}from"./ApolloWrapper.W8lg4Npw.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="9346b12a-1cd7-4ad7-328a-d8376e89b313",t._sentryDebugIdIdentifier="sentry-dbid-9346b12a-1cd7-4ad7-328a-d8376e89b313")}catch{}})();var e={},l=d.default;Object.defineProperty(e,"__esModule",{value:!0});e.TrackEventMutation=e.ExperimentQuery=void 0;var n=l(o),r=p,i,s,u,m=(0,r.gql)(i||(i=(0,n.default)([`
  fragment ExperimentQueryFields on ExperimentDecision {
    experimentName
    assignedVariantName
    modelExecutionIds
    message
  }
`]))),v=(0,r.gql)(s||(s=(0,n.default)([`
  query experimentation(
    $testName: String!
    $userAttributes: JSON!
    $uidType: String!
    $vendor: String
  ) {
    experimentDecisions(
      testNames: [$testName]
      userAttributes: $userAttributes
      uidType: $uidType
      vendor: $vendor
    ) {
      ...ExperimentQueryFields
    }
  }
  `,`
`])),m);e.ExperimentQuery=v;var c=(0,r.gql)(u||(u=(0,n.default)([`
  mutation TrackEventMutation($trackEvents: [TrackEventInput!]!) {
    experimentTrackEvents(trackEvents: $trackEvents)
  }
`])));e.TrackEventMutation=c;export{e as q};
//# sourceMappingURL=queries.SDt1FY47.js.map
