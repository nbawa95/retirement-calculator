(this["webpackJsonpfuture-worth-calculator"]=this["webpackJsonpfuture-worth-calculator"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(0),i=n.n(s),o=n(9),r=n.n(o),c=(n(57),n.p,n(58),n(39)),d=n(40),l=n(12),S=n(45),u=n(44),x=n(35),h=n(46),A=n(11),j=n.n(A),m=n(101),y=n(103),p=n(41),U=n(96),G=n(102);n(59);function g(e){var t=e.inputRef,n=Object(h.a)(e,["inputRef"]);return Object(a.jsx)(p.a,Object(x.a)(Object(x.a)({},n),{},{getInputRef:t,thousandSeparator:!0}))}var v=function(e){Object(S.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={showCurrentSavings:!1,renderCompoundRate:!1,renderExpectedSavings:!1,renderDesiredRetirementAmount:!1,showCompoundRate:!1,showExpectedSavings:!1,showDesiredRetirementAmount:!1,currentSavings:0,compoundRate:.08,expectedSavings:0,desiredRetirementAmount:0,yearsToRetire:0,showFinal:!1},a.currentSavingsDone=a.currentSavingsDone.bind(Object(l.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(l.a)(a)),a.compoundRateDone=a.compoundRateDone.bind(Object(l.a)(a)),a.handleYes=a.handleYes.bind(Object(l.a)(a)),a.handleNo=a.handleNo.bind(Object(l.a)(a)),a.handleKeyDownCompoundRate=a.handleKeyDownCompoundRate.bind(Object(l.a)(a)),a.expectedSavingsDone=a.expectedSavingsDone.bind(Object(l.a)(a)),a.handleKeyDownExpectedSavings=a.handleKeyDownExpectedSavings.bind(Object(l.a)(a)),a.desiredRetirementAmountDone=a.desiredRetirementAmountDone.bind(Object(l.a)(a)),a.handleKeyDownDesiredRetirementAmount=a.handleKeyDownDesiredRetirementAmount.bind(Object(l.a)(a)),a.calculate=a.calculate.bind(Object(l.a)(a)),a.readyToShowFinal=a.readyToShowFinal.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"currentSavingsDone",value:function(){this.setState({showCurrentSavings:!0})}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&(console.log(e.target.value),this.setState({renderCompoundRate:!0,currentSavings:e.target.value}))}},{key:"compoundRateDone",value:function(){console.log("i think this is unecessary")}},{key:"handleYes",value:function(){this.setState({showCompoundRate:!0})}},{key:"handleNo",value:function(){this.setState({renderExpectedSavings:!0})}},{key:"handleKeyDownCompoundRate",value:function(e){"Enter"===e.key&&(console.log(e.target.value),this.setState({renderExpectedSavings:!0,compoundRate:e.target.value}))}},{key:"expectedSavingsDone",value:function(){this.setState({showExpectedSavings:!0})}},{key:"handleKeyDownExpectedSavings",value:function(e){console.log("in the expectedSavingskeydown"),"Enter"===e.key&&(console.log(e.target.value),this.setState({renderDesiredRetirementAmount:!0,expectedSavings:e.target.value}))}},{key:"desiredRetirementAmountDone",value:function(){this.setState({showDesiredRetirementAmount:!0})}},{key:"handleKeyDownDesiredRetirementAmount",value:function(e){"Enter"===e.key&&(console.log(this.state.compoundRate),this.setState({desiredRetirementAmount:e.target.value,yearsToRetire:this.calculate(this.state.currentAmount,this.state.compoundRate,this.state.desiredAmount),readyToCalc:!0}))}},{key:"readyToShowFinal",value:function(){this.calculateFinal()}},{key:"calculateFinal",value:function(){var e=this,t={current_amount:this.state.currentSavings.replace(/\,/g,""),yearly_deposit:this.state.expectedSavings.replace(/\,/g,""),desired_amount:this.state.desiredRetirementAmount.replace(/\,/g,""),compound_rate:this.state.compoundRate/100};fetch("https://r2a06cofy9.execute-api.us-east-2.amazonaws.com/default/calc_retirement",{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log("Success:",t),e.setState({yearsToRetire:t.years_to_retirement,showFinal:!0})})).catch((function(e){console.error("Error:",e)}))}},{key:"calculate",value:function(e,t,n){var a=n/t-e-1;return Math.sqrt(a)}},{key:"render",value:function(){var e=Object(U.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));return Object(a.jsx)("div",{style:{textAlign:"left",padding:"10%"},children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(j.a,{onTypingDone:this.currentSavingsDone,cursor:{show:!1},avgTypingDelay:20,children:[Object(a.jsx)("div",{className:"textLine",children:"hi, so you're interested to know when you can retire?"}),Object(a.jsx)(j.a.Delay,{ms:500}),Object(a.jsx)("div",{className:"textLine",children:"i can help you with that. let's do some calculations."}),Object(a.jsx)(j.a.Delay,{ms:500}),Object(a.jsx)("div",{className:"textLine",children:"first things first - how much do you currently have in savings?"})]}),this.state.showCurrentSavings?Object(a.jsx)(m.a,{id:"standard-basic",label:"current savings",InputProps:{startAdornment:Object(a.jsx)(y.a,{position:"start",children:"$"}),inputComponent:g},style:{paddingBottom:"20px"},onKeyDown:this.handleKeyDown}):null,this.state.renderCompoundRate?Object(a.jsxs)(j.a,{onTypingDone:this.compoundRateDone,cursor:{show:!1},avgTypingDelay:20,children:[Object(a.jsxs)("div",{className:"textLine",children:[Object(a.jsx)("span",{children:"cool. i'm going to assume you're investing this $$$ and not just keeping this as cash like a dud."}),Object(a.jsx)(j.a.Backspace,{count:5,delay:500}),Object(a.jsx)("span",{children:"n overly cautious person."})]}),Object(a.jsx)(j.a.Delay,{ms:500}),Object(a.jsx)("div",{className:"textLine",children:"if you're investing this in the stock market it's safe to assume it will compound at an 8% rate annually."}),Object(a.jsx)(j.a.Delay,{ms:500}),Object(a.jsx)("div",{className:"textLine",children:"this has been the historical average for the past half century."}),Object(a.jsxs)("div",{className:"textLine",children:[Object(a.jsx)("span",{children:"would you like to complicate things?"}),Object(a.jsx)(j.a.Backspace,{count:18,delay:500}),Object(a.jsx)("span",{children:"enter a different compound rate?"})]}),Object(a.jsxs)("div",{className:e.root,style:{display:"flex",paddingBottom:"20px"},children:[Object(a.jsx)(G.a,{variant:"outlined",style:{marginRight:"5px"},onClick:this.handleYes,children:"yes"}),Object(a.jsx)(G.a,{variant:"outlined",onClick:this.handleNo,children:"no"})]})]}):null,this.state.showCompoundRate?Object(a.jsx)(m.a,{id:"standard-basic",label:"compound rate",style:{paddingBottom:"20px"},InputProps:{endAdornment:Object(a.jsx)(y.a,{position:"start",children:"%"})},onKeyDown:this.handleKeyDownCompoundRate}):null,this.state.renderExpectedSavings?Object(a.jsxs)(j.a,{onTypingDone:this.expectedSavingsDone,cursor:{show:!1},avgTypingDelay:20,children:[Object(a.jsx)("div",{className:"textLine",children:"alright moving on. How much do you plan on saving every year?"}),Object(a.jsx)(j.a.Delay,{ms:500}),Object(a.jsx)("div",{className:"textLine",children:"don't worry, I won't judge."})]}):null,this.state.showExpectedSavings?Object(a.jsx)(m.a,{id:"standard-basic",label:"expected savings",style:{paddingBottom:"20px"},InputProps:{startAdornment:Object(a.jsx)(y.a,{position:"start",children:"$"}),inputComponent:g},onKeyDown:this.handleKeyDownExpectedSavings}):null,this.state.renderDesiredRetirementAmount?Object(a.jsx)(j.a,{onTypingDone:this.desiredRetirementAmountDone,cursor:{show:!1},avgTypingDelay:20,children:Object(a.jsx)("div",{className:"textLine",children:"and how much do you want to withdraw each year when you retire?"})}):null,this.state.showDesiredRetirementAmount?Object(a.jsx)(m.a,{id:"standard-basic",label:"yearly retirement",style:{paddingBottom:"20px"},InputProps:{startAdornment:Object(a.jsx)(y.a,{position:"start",children:"$"}),inputComponent:g},onKeyDown:this.handleKeyDownDesiredRetirementAmount}):null,this.state.readyToCalc?Object(a.jsxs)(j.a,{cursor:{show:!1},onTypingDone:this.readyToShowFinal,avgTypingDelay:20,children:[Object(a.jsx)("div",{className:"textLine",children:"ok time to crunch some numbers"}),Object(a.jsx)(j.a.Delay,{ms:800}),Object(a.jsx)("div",{className:"textLine",children:"almost ready."}),Object(a.jsx)(j.a.Delay,{ms:500}),Object(a.jsx)("div",{className:"textLine",children:"aaaaand done."}),Object(a.jsx)(j.a.Delay,{ms:800})]}):null,this.state.showFinal?Object(a.jsx)(j.a,{cursor:{show:!1},avgTypingDelay:20,children:Object(a.jsxs)("div",{className:"textLine",children:["if you start with $",this.state.currentSavings," and invest $",this.state.expectedSavings," every year with a compound rate of ",this.state.compoundRate.toString(),"%, you will be able to retire in ",this.state.yearsToRetire.toString()," years and withdraw $",this.state.desiredRetirementAmount," each year in your retirement."]})}):null]})})}}]),n}(s.Component),b=n(43),O=n(100),D=window.location,w=Object(b.a)({typography:{fontFamily:['"Courier"'].join(",")},overrides:{MuiFormLabel:{root:{"&$focused":{color:"#46494c"}},focused:{}}}});var R=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:D,children:Object(a.jsx)("img",{style:{float:"left",width:"30px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACTFBMVEUAAABGRkZGSUxGSkxGSExHR05GS0tGSUxGSkxHSkxOTk5FSkpGSUxGSU1FSU0AAABHR0tGSUtGSUxGSUxFSU1ES0tHR01GSUxGSUxGSUtAQFVVVVVGSUxHSk1GSU1GSUxFSExKSkpFSkxGSUxHSUxGSkxISFBHSUxGSkxHSUxNTU1ESEtHSk1GSktAQEBGSEtHSUxGSUxGSUxHSExJSUlES0tGSU1GSUtJSUlGSktERERFSkxGSU1GSUxGSE1FSUtGSU1GSUtFSE1ESkpGRlFISE1GSUxHSUxGSUxGSUtDTk5HSUtGSUxGSUxGSU1GRk9KSkpGSE1GSUxGSkpFSExGSUxGSUxGSUxGSUxESE1GSk5HR0xHSUxGSUxFSUxGSUtGSEwzMzNDQ1FGSE1HSUxGSUtGRk1GSExFSExGSExGSUxGSUxGSU2AgIBGSUtFSk1JSUlGSUxGSExDSkpGSUxGSUxVVVVGSUxGSUxHSU1GSUxFTExFSU1GSUxHR0dGSUxHSk1FSU5GSUxGSU1GSUxCTExFSUtGSktGSUxGSUxHSkxHSUxFSEtHSUxGSUxGSUxHSUxGSUxGSUxGSkxGSE1GSkpHR0xESU1GSkxGSUxGSUxFSUtGSU1GSkxAQEBGSUxGSE1HSk1GSU1GSU1ISE5GSUxGSkxFSUxFSUtGSUxHSUtFSUxGSUxGSU1GSUxHSk1GSUxHSU1HR01GSUxFSU1HR0tGSE1HSExHSkpGSU1FSk1GSU1FSExHSktHSUtGSU1GSU1GSUxGSUwAAADX50uUAAAAwnRSTlMAC9HegyQz/sJhDTT0oD8BRGbM4ogiK+n9xAwGTar68aIYb8/ZgCDru14KR12OCFi4/O6UFSl0uhyVD2vSV7eByItZLRY1uWXtyxdz1Np7HR++tTdRsvvynTxFL5Dqv2l/BRNuzt8hdUPF+fVCAm1kDuSGJvPnA833fqUljPgZ71M75ZJUG3qcq69ovKmxtqTD4eOKYz42OHnA09VQ0ATYcVrwwS7HyZd9rnfK24+9VuiCMtZGPXiNSEmt5kqmcJnc7OZLSYoAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QEBByEF9juZrQAAAytJREFUWMOll/sjk1EYx4+kqZVRaCxzCblkGXKnWtISQ7kXYXKZiLQJ6ybdS7qL0v1Cd111Qd+/rPNSs3ezve+79/npvM8538+e85xzds5DiFNzW+K+1IOIsGUAJJ7LV7gMkFI9Zaxc5SVzGeDts5oisMbXz0WAlBB/37UUIQ/wCXQRQIhiXZCSMoJDvAVO5T+AWmjYemYq4RGRLgIIM5UNzFSiomP4qSNjN8axAISoNsWrKSMhMYlLvDk5JQFzJrXpSU1jFjbNqTo9I3NeDLktQJWVPRdCrDP5lmBGunWbZnsOOwdkRxoTljxXo3Isl+3U0jG7fHLskpi3O58JqkBX6Cz6omI6Zs9eu1VQlJSW0Z7yikrnG6GKrlNm5cL3P8C+/dXMqaqJduPI/QE11LV1hA2o1zcwoR+MaCRc1iRBdTPLQwEtBqpuDTnUxikn7YC7za9I5xYz4HAHt5qQEjnCU218hWXoPNLFR01I11EY7c+JtNnET04U3Ti2jOfYRa0HaBejL2pFvIt/e/PWC0OfGL2fGmYxepKI4yfE6FUnUSEqgFPAaVGAXriLWgLSjzOi9H3AgNgUnBUFOIdycSk4jwZRenIBKeIA2bgoXDRgvGRpX0aQcMAVRFnaVzEoHBBvFfY1DAkHtCDE0jbjunDADdy0tH0g4bpy7MxNgluWj9vAHaGAu8DCFRhjQJNQwDAMVlEPIVsoIAX3rL56YKgXpk9SQmf16SFBhjCAHhLWy7UFI4LOY9soPFkODXBfCGAAyGI5TAV4wPcWpTY2goc2w6MBPX/AI+CxjUsWgCdFfPWN5Xhql7JnSjyv46dXvIDB396dzPV+tdhLIGwRt6wUrL3h0F4B44uueUc3JDyOxATw2kHlkvcGMHO85kxvac3h8K0fSmuSYqfXfE48MOLkEkp/BxjfO+7XfAByO5xG+JFWCCmTi3dKKV5dy7VhvT4xz/Uqu1SYPg/SjtEvhNMUX5miovPbd6tUB07F9VOntonfVusYNjIvZGX+D7NOr9eZx0eZUgE/J/iX0GO/fmvBMm3vlIDTyljb5PRMzazWYPgzWzMzPelwe/wFCtE7WHDrF0gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDFUMDc6MzM6MDUrMDA6MDA/oOcGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTAxVDA3OjMzOjA1KzAwOjAwTv1fugAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="})})}),Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(O.a,{theme:w,children:Object(a.jsx)(v,{})})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),k()}},[[63,1,2]]]);
//# sourceMappingURL=main.0303f257.chunk.js.map