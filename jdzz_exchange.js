/*
#京东赚赚兑换

说明：每天只能兑换一次面额，每种面额每月仅可兑换一次。

比如：不足50，3月兑换面额10，面额5，面额2，4月兑换面额10，面额5，面额2。以此类推。

不清楚后续还有无库存，尽早兑换。

兑换的红包有效期 5 天

[task_local]
#京东赚赚兑换
11 11 11 11 * jd_ty_help.js, tag=京东赚赚兑换, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true*/

const $ = new Env('京东赚赚兑换');
var version_='jsjiami.com.v7';const D=b;(function(c,d,e,f,g,h,i){return c=c>>0x8,h='hs',i='hs',function(j,k,l,m,n){const C=b;m='tfi',h=m+h,n='up',i+=n,h=l(h),i=l(i),l=0x0;const o=j();while(!![]&&--f+k){try{m=-parseInt(C(0x351,'JxqZ'))/0x1*(-parseInt(C(0x164,'6fp)'))/0x2)+-parseInt(C(0x274,'rg3S'))/0x3+parseInt(C(0x287,'iecE'))/0x4*(parseInt(C(0x30a,'4lIA'))/0x5)+parseInt(C(0x24f,'!gyo'))/0x6+parseInt(C(0x2f6,')@JF'))/0x7*(parseInt(C(0x196,'!gyo'))/0x8)+-parseInt(C(0x1a2,'!gyo'))/0x9*(parseInt(C(0x1a3,'dW^5'))/0xa)+parseInt(C(0x2fc,'iecE'))/0xb*(-parseInt(C(0x1b9,'6fp)'))/0xc);}catch(p){m=l;}finally{n=o[h]();if(c<=f)l?g?m=n:g=n:l=n;else{if(l==g['replace'](/[VPgyrHAUNMITeKQdWRlO=]/g,'')){if(m===k){o['un'+h](n);break;}o[i](n);}}}}}(e,d,function(j,k,l,m,n,o,p){return k='\x73\x70\x6c\x69\x74',j=arguments[0x0],j=j[k](''),l=`\x72\x65\x76\x65\x72\x73\x65`,j=j[l]('\x76'),m=`\x6a\x6f\x69\x6e`,(0x123323,j[m](''));});}(0xc800,0x6eca3,a,0xca),a)&&(version_=a);const notify=$[D(0x19f,']idf')]()?require(D(0x344,'Yk6r')):'',jdCookieNode=$[D(0x29a,'OPo@')]()?require(D(0x2c4,'6fp)')):'';let cookiesArr=[],cookie='',message='',allMessage='';if($[D(0x248,'P[l6')]()){Object[D(0x21d,'OdyD')](jdCookieNode)[D(0x347,'@(n^')](c=>{const E=D;cookiesArr[E(0x1b7,'HeLb')](jdCookieNode[c]);});if(process[D(0x183,'(]9x')][D(0x246,'m#hT')]&&process[D(0x279,'O[xq')][D(0x278,'nRKh')]===D(0x26e,'AvFO'))console[D(0x1fc,'WM^w')]=()=>{};}else cookiesArr=[$[D(0x1ed,'pL9$')](D(0x1da,'5vy]')),$[D(0x1be,'^S(P')](D(0x1de,'cI%V')),...jsonParse($[D(0x254,')@JF')](D(0x2d8,'6fp)'))||'[]')[D(0x22d,'HeLb')](c=>c[D(0x30e,'(]9x')])][D(0x2bb,'0MZB')](c=>!!c);function b(c,d){const e=a();return b=function(f,g){f=f-0x15f;let h=e[f];if(b['AvHItp']===undefined){var i=function(n){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let p='',q='';for(let r=0x0,s,t,u=0x0;t=n['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['indexOf'](t);}for(let v=0x0,w=p['length'];v<w;v++){q+='%'+('00'+p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};const m=function(n,o){let p=[],q=0x0,r,t='';n=i(n);let u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(let v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};b['SGRUUJ']=m,c=arguments,b['AvHItp']=!![];}const j=e[0x0],k=f+j,l=c[k];return!l?(b['pECfPs']===undefined&&(b['pECfPs']=!![]),h=b['SGRUUJ'](h,g),c[k]=h):h=l,h;},b(c,d);}const JD_API_HOST=D(0x2f0,'6fp)');let nowTimes=new Date(new Date()[D(0x231,'vB8G')]()+new Date()[D(0x27a,'HeLb')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8);function a(){const a2=(function(){return[...[version_,'PNKjWTMsNHjUieQIamAi.ecIdoRgm.VOv7VyTglr==','f8kDWOFcHCoW','c0BdMMK7','i8oSWRP1W6C','vSkkwNXl','umkXAbu','W5qgWPFcJSka','WR7cLSocW5a','W4xdHmk6WOjk','wCkuFtPg','eNPgn3RcISoSW5TX','tr/cNCoTyq','WPJcO8oGW7JdSW','WRNdTtpdMfD2tmogo33dKq','y8kOW7hdKxzZqCojlWNcVsldQHJdQYmM','5lMw6kwe5z+RWQddTrldLmot5OIP5yQL5AwJ5yMb57k76ls+5l2Y5PE3W47cHSodChTJ','WOFcOWpcJmkK','WPZcKrdcJSkzxSkgW5lcRmkzWR4','W5eslCooW6lcVCoz','ccrfW6C/pa','WPpcIKbS6k6Y5RgD5Aso6lA777+d6k2c5Qcm5P6C57YF6lwQ6ywJ6k6m','W7pcHMNcVNNcVCkLxrldMCkDCSoYW6jdvHucobRcKH3cQCo9W6eYWPFdGmk9W6dcTW','je8cv13cKW','c2zlkgC','WRe5WQf6oKxcHCkgWPazjNi','WRRdSZldNvWGemoAngVdSu1o','vqFcQIddTCkmeaS','WQRcGSofW5K','FsVdJ8oBCHRdG0q','W4RdMCoVW43cImkEWRldVMlcGM0','5lIY5lQr5PYH5yM35zIa6k2p6zAi5Pww5O2/5lIW56Ix77+V6kYA5QgP5PYm6iwm6lU16k+R5AA5576h57Mx5Oop5yEm','W5hdLxKMwW','W5SjWP9KW4S','tmkcAwPF','W5ldSCo1WRxcKCoxhCoMt8oaW4VcUmkggCkpW4rHbSoHoSo0WPpcNd3cNJpcO8oQWQ1sW7TVmZqtWO7dIgJdICo0W4NdOwO5WPpdNr1pWQ9UWP1oq8oguCodBMbLEwvipSoqWOtcKLZcHH7cR8otz8kPix3cMmkgW4tdVmoeWPzNW6GVW7HWWRdcUqJdQLGOW6ldUIDXamkGoNxcGY/cO8oIW4tdJCkSfmoLcMtdPXKgk8owbCoYg3zKhCkjvvBdNSkJt03cOxTSW5RcJ8oidwBcLxOsW7ZdHLyGzYi2amo2qSoTfSkkW592W4xdNCobfN4','W68bWRJcOCkr','5lUv5lIo6lAy5y+T','ggldJNyvW6ivW5FdGW9On13cKra9','WPhMSkFMNyxNR73LK4tMGzpLHzRMJAVNM6FNU4/LJOpPOktLU7C','tZzdWQ0Rl8khWRT3wwX2','W5CdWRhcV8ke','WQRMS7/MNyhNRAFLKiFMGAJLHkBMJzxNMl7NUBxLJkFPOlhLU6a','WQNcG8oeW5JdQcauBSo8','hmkxWPFcRCo/','55A55OQl5P+z55Qu6zMo','i0/cIJBdSW','W6hdICkaWOC','W7NdQfJcSGNcHaC','WRPUW6eGAqtdNSk9WQOtjGBdQa','W6uBWQXGcG','WRzrW6dcSf8','WRhcHhhcTG','W4WXlWr9WRi','W4C7pcvUWRqw','W5/dK8oLW5/cJmk5WRVdVv3cUwb4W7xcQCkRWOPD','W6yiWR/cV8k1','ACkHWOLbcq','oXtcU8obW7/dTWfa','W43dM2WqthK','W7hcRs3cJqe','l8kQWRFcG8o2jmoRW60','W5KNWRPIW6ddHCoVW74','k8kkxd81WOqrWPe','W6vTWOpcMHi','m8koW5RdMve','WR17BtbKoxVcOq','W447WPJcKSkw','WRX8vhaVW6ZdPSkb','W4iTbmoKWOi','W7OSmmo7WOFcP8kw','W5eYWQTCW57dHCoMW68','n8ojdSo/WR0','f0pcVX3dJSkZequL','5lQd6kEE5z+8vJzjWQBcUUAkTEwlUowLJ+wjUEEWK+I2UEs/M+AuTSkao8o9fmofca','B1v2W40V','WPVcMWRcHSkdw8kl','lSkzW5ad','c1xcPXhdG8kG','dhyMx8o0','mSoTfmkM','FNpcL3JdJG','dbtcOmolW7RdNd5P','W4xcR8k7ArlcMhOexIhcTSot','BmkVFu4','W6OziYnL','W5brWR3cIsWZW7tdKSkF','W6SNWRD8of/cI8kmWQ4IkZxdRG','ihddMua/','WQtcIgNcSfi','k8k3WQRcMmo/i8oWW6ynraO','jmomD8oZWRq','W6JcPhpcHIPRwCo2ahNdUMy','kColtCoYWOy','BCkLW4ldQbK','cLBcObe','WQtcKapcVCkS','W7CTWQH1W5m','W4C5hXHH','W4xcOmkQub8','W5lcGgHxdG','BIhdJ8oEFYddLW','w8kOzHHLcIhcVSo3xfDQW5mxW4tdRfC','W6RdNSoYW5lcUa','dvZcJdhdQG','b8oKW5hcL8ohvG','iSoAW4/cTmoO','W7xcT8knBby','W5eMWO7cJCkP','emoKW4RcNCocFwur','m8kktW','xtjyW6OOzG','WO9gW4/cJLa','omkaxdO4WR4f','WRZcI2BcU2NcT8k0eW','W4BdPMqcuW','qKLZ','W40YWQjBW6y','A14JxeddIW','eN8bvConeSoGEq','W67dRf7cPq0','BYddUmodAG','noAGKoA1JUwjGoACQoADRow2TowgIUApHEI/QEw9REwjNEMGQ+w7VE++OEw+N+wNQoI8NEIVOmk7','zHCzFq','5yAg5O6E5OUq5yUV77+q','ASkZW7xdHa','nSkGWRdcKCo7dCo7','f8kEWOrtW6lcISomlvNdV0i','W5BdUSkRWQPP','W5tdTmkMWPP5','WRFcHmor','f3pdK38','BNlcTxNdHwddQa','l8oOhmkIWQRcVH0sW6FcGCo6n8kjhmkCbNtdRsKLg33dG8o+WOZcGmk3e1nvFCkuWPVcUmoCWPFdQSo4W7LjWOydW5NdOHzUWQdcO8kMWOZcTtNdM8kuW7WKy8ouBweBWQfYW7JcNMrtW4fwECofbSkUWQJdQ2/cUCk0WPJdKCkgW6LCW4LOWQRdSCkRsCo4FtVcOx07w8oVW4GfswRcUCoYasORvvW+WRvSWPKRqmkaWQtcQmkfemkDWQtcGSoaWPqCprldJruqprldUJanW7eKBcdcQ8oeaCoGFf0cWRxcReiWWQJcQgNcPSkNq8k7b8oCW7e','WP/cOvRcK1NcKCkejW','FxBdSSkSW58','tMBdU8kyW4/dTmoTWPPyWOfFthy','kSoYdSosWPBdRwW3WP7cTCk6WPlcI8kzWRVdHMm','WRLvFIj4','WPLAW7BcVNldHmkW','FCkMWQ/cI8o/bmoQWR0vzvTrqgBdTCkRW4pcNCo6FMb1W650WPv5mCoYWQVcJ30','W4tdR8k2WR1xWOBdGComW5GA','W6/dMmoJW4xcO8k2WRhdVq','nmoSDSoeWRdcO2xcUq','qtzpW60kAmkEWQS','k8kKWRhcKCo/','smkR5AAp6lEzWO8t5y6p5zQCW4/dHa','Amk9W78','5Q6T5AsH5y+f6ikW5ywo5O6M5lQn5Q6x77Yy5QYD56EZ6z276Aca5Q295P225lIZ5y2P5yAP5O6Y5lQa5QYB44kibW','eNFdH2K','tSkIBaPHlsJcVCoiz1O','ESkKW4VdLEIVRoAWLEwLToI1QE++HEITOEAIP+ACHoE/VoI2GUMhJ+ITRa','lNlcMYZdTq','WRRcJ8kN','W5m9WR3cG8k+WR84','WOdcLMdcPvlcSSk8bq','W7FdO0/cUH3cLanv','fCo+WRnaW4O','thtdNCkeW58','W6qFiJf1','W43cMSkfzqC','CCktAMfi','omkFqs51W6OaWPNdMmoTW5RcUmkrWOBcM191','nHlcL8o7WQtdLmoAWPbbWRzu','WQDYySkNWOxcOmkWhdRdQW','W7ZdNCkd','z1tdNmkdW6u','Cmk6txXe'],...(function(){return[...['WQ7cNJZcRmkI','WRdcMCk0jmkJW4/dRW','A8kEW614jG','v8k7rdvo','CSkzWQr+','cN8s','W7xMSPtMNO3NR53LKjVMGi/LHONMJ5xNMARNUjFLJ6hPO63LUBC','W6xdS8kBWRXr','WRZcN8odW5xdOG','cMBdJhmsW6y','trldISouwq','5lUH5lIG5P2b5yQz5zMr6k2j6zwl5PsS5O2a5lMZ56Ie776R6k235Qgy5P+u6isb6lMu6k645AEE572357MA5OgP5yAI','5yEc5O2C5OUc5yM9772F','fexcPa7dHCkDfGuZWQ/cJCof','nmkmW7JdT1u2kcK','WRtcPWBdVeldMKWmoWa','f8oEhtGDWQZdV8kOfsGxWRW','W6hdU8ooWORcJW','WQxcThlcMN8','W4WclCov','zMlcJx/dLgddSSonW4VcGSo5','DmkGW7hdMZ8As8okjIZcUa','W5WhcmowWQZcJSkXfG','W71lWQRcUZW','yqu6D8krW40','WOFcTYfzD2mmW6ldVW','WPJcIGpcTmkBwmkc','bSodi8olWOy','qXtcJConyvKlAHbPyCoVrbdcICovW5ldVmohEG','W4ZcJLJcHtS','sqjsW4Ke','WR3dSdpdMfSJwmo5oKRdVxi','WQNcMJtcG8kv','lmoIgCk3WQi','wuD9W5y','5ysO5O2W5OQU5yQf772M','W5/dSmoGWQhcGmkyfq','W4uVd8ozWQq','kCoJgG','W6uyWQn7fq','WRjCDcHH','5lI65lMF6lwX5y2L','W7HBWQVcKq','uCkzyazl','W7uwWOxcV8kdWPeyuSo3WPa+W6RcLq','wKLGW4mKDCkPWRO','dCkpW5eBsq','cmoKW5NcUCoCqq','WQ9tW5pcQwq','W44pWQTMW58','a2GwxmoamSoYCCkxzZtdHXe','kHxcUq','W4pcSNXkba','hCojg8oZWRG','uSk/yJv2fG','W4CfWPpcSmkr','W78vg8okWP0','i8oLcG','sb7cNG','yqlcSmozBa','WPnqW6RcNgFdJW','W5m9WR0','W5ZdISoQW4tcIa','W5aSitTQWOKzuCovWP5g','nCoPsH7cIG','W7BcImkAyX8','WPxcLZZcT8kP','x27cN3FdIW','W6FdLZ3dPc/dPmoPlZtdNCogi8oO','hCoRWPfZW4y','nJFdIYxcKtRcV8o9W5NcISoZW7GN','WQ/cKSoVW6ddNW','BJxcPSomxhG2ta','pSkRWRu','W7BdMCkhWRTHWQRdO8oZW7KGW7JdVedcJb3dNmkX','WOhMSAtMNiNNR4JLKAFMGRVLHBJMJ7hNM6FNUQ/LJPRPOP/LUQq','jmoyESoEWO8','hbNcHCoSW5q','W6WckSoyW5y','W5BcOCk7Dq','W7RdNSoKWQhcMa','W6mRfCoxWOq','W5i7WQDgW50','cwb6hN0','iH7cVmotW7ldNHe','W4NdGh8LtthdVmoDWPeIW4JdGmksbSkIdvahumkJb8o6aSkJx23dP292yMjZWRKnBgnip8kAW6pcU3f5','WRFcKSofW4ldPYay','jCkfWQ5EcSoWW44','W7ldOKS','yHFcNmoMsG','W5CSWQ1EW6FdImoWW6G','WRPAtKO7','k10Gs1W','tNZdIuGyW6CZ','smkkrwO','hruNWPrWdSoPWPNdJM5ugCka','W7ZdJ8ku','tseAFCkr','WRxcLCoCW5tdPtm','W5L6WOFcOW','AoIVV+MhOUAxVEEzPow+KEImUUwnOb7cUKPTW63dGutdMCkPWPRcTCoHvmkKymkLo8k3W6ddMLuMW6z2fmo0cmkIW59QagZdKYSwA8klW4dcUrRdLmo9oCkt','cSoJC8oCWPS','t0vGW4S+uSkOWQ7dN1nt','iuldUNqt','m8k/AZK7','kLK4AeVcN8oFoq','W7FdVMlcUqZcLq','WPRcKMhcMf8','W5SZWQ7cIW','gConxCobWPhcJ03cG0lcGSksWP9R','oNC6x3C','pSkUucWs','p8oMzCo9WQZcOw0','W5dcQMrglq','WRBcMmor','WPpcM8opW4xdNa','W7iIi8oZ','WRD7AHn3n2q','W6nrWQhcLG','W4K1pcLy','W4qXjIq','W6ddOmoZW4tcRW','qSkkxg4','n8kQWQq','fexcPa7dHCkAgq45','xaawASk+','44c+5O+256sU44kZk1tcS8k8W7ny5BEf5AwN5PAb','W5/cPhC','jmoJEmoqWQW','nNlcGtldGW','aCoDWObcW6m','W53dRCoZWPBcLCkdba','W44eW6xcVvVdGSkvW7q','kg1joxW','W5BdHmoH','W73dPSkWWOHQ','WRZcNSoAW4xdOZu','k8kiW77dM38','tSkXDWnH','W5K7WRBcNSk1WQy','f0auySoq','44kW5O6o56wY44gq6k+45yAi6i+a5y+H5lIw5lUl6lse5y2B5lMgf3tdK8oXDCovoEEzSUAmRUs+RUEwGCokWQxdJmkhWPXR55Qk5lMY5lMr562n5yIx6i+c5yYR','ASk7W7VdIHqYsmoj','W4uMlXj7WQ8h','W7lcTSkbBbu','WOhcL0lcVM4','W67dV0xcRa3cUqHaFKmj','W5O8WQW','WQbWWR5WgL7cG8kcWPC1BcxdUa','iCoRamoF','W48vWQTGW58','W7OSma','WP5/DfeP','emkurYSk','W7RdRfJcTW','BJxcRmoj','lmoLcCoF','DwtdL8kHW7G','yXmrAmoyW4KkhWVdNW','ivmR','WQFcI2pcGMS','WOn8FJPv','m8kxW5m','nSkMWQlcImod','D3VdImkFW4y','oSo1wcRcN1Kc','lCobW7VcTmoc','Ae3dGW'],...(function(){return['W40WWRT/mftcN8kJWRO','WRtcO3xcGaXNqmo8dutdUZ8','awLCjvRcVmo9W5n3WQzBFq','FCk/AHTTaqZcN8kv','W6yIjCoHWOW','W79rWRu','tuDNW4Onq8kSWRldUuLsmG','W5ldKwuXCgtcP8kBWPu+','W6BcGhnIkq','lSoiyX3cTG','W7VdTuVcHrZcNXy','D0FcU3VdUa','WO9nxdjjeuBcGCoAya','mSoOtaRcILex','ifK/s1JcKCoa','mSo+xq','vCkFwMzaW7NdUmk6pa','W6nFWQdcKsa','WP5fW7tcL3RdHmk5W4pcH8oAWOPFWRS/WQT4','W6WMWRvtlq','hhqsWRb1nSovWPaivM1SWRS','W6hdNCkbWPXT','lmkrwJC3WQ0nWPRdHW','5BA355AK5A+X','W6yRWQbKkGVdG8ogWP8Gk2hdPSkJx2VdJtFdVrlcGW51imo7mwJdSHrhaqiGWQW','pmkkrZuWWQ/LTPBLP43ML7BcOCkwW6W','BcRdJq','W6SwWQTZW4m','W5utatnv','BSkHWPtdLSkegtRLVBZLPl7JG7tKUApKUBpOTANLJ5q','WONcPmkHW7dcJCkaimo7uCoN','qs3dG8o0ua','cmoKW5K','dMDeW6VORR/MSBNLP63OT7lVVPBOR4RMO7FMNRpNVPJOTARPHO/ORAu','W6/dQtJcUSkGWRv+za','W74TWR1UphJcGSkpWPezjG','imohWQfDamosW7bj','dSo5d8ovWPa','xJrdW7KJt8kmWRi8','jCo+i8ovWRu','55It5yQ/5yMI5yoB77+1','W7JdPZ/cS8kjWOn7BaazW6pdNq','y8k3W6ZdHtSNra','WR5ztqzc','ub7cJCoPDxqwzG','WPjHqxqv','irRcOSof','W6ldRmkxWR94','W5tcRMrbjgTE','W6xcPg3cIW','nXhcL8o7WQtcHmkkWOTnWPv5twS','ghmzWRvYmCkCWRuaFwfR','WRdcKCoLW5RdKW','W7tdM0WStq','WPXAW6VcKhRdGG','b3GtBwRcS8o3a28oo8oPW5q','EtBdKSoaEX3dMe/dV3XB','qr/cJW','W7OSmmoxWPVcVG','W5JdK8oCW5/cGq','WQRcHCoFW4VdOW4tBSoQjCoP','WQ7cPSkbpSkG','W5tdIxpcKI3cSJnH','WRZcSmofW4xdSG','W7BdMKqwAa','e8oQW5FcIa','cfJcQH3dJSk/cG','n3Tkp1hcPCoGW5m','nCoTd8kHWR8','bCosWPbeW7m','W6hcLMVcKL7cLmkI','aaLbW7enACkdWPBdNxH5aSkA','WO1hoCoPW5BcGSouWRa','W4JdQHtcKmkb','W6ZdM8oXWQVcQq','BmkMW6ZdKwb8cSoBoeVcTJlcOvFcPcX7WPZdRgGenSkyta3cNCkGWPRcRGBdUf3cMmoeWRpdLee6W6CqWRxdHWpdRmoJW49Xa8kDWPDqb8obqW8','mmoOCCo8WOFcSM/cUwdcSCkYWRu','W4nlWQBcHXa','xSkHqgTg','WO1jBInE','BZimuSk3','W7tdMmoJW6ldGXuIsCockCodWP7cOW','kSkRrre3','dM1bkMVcRa','xL94W40j','c8ozWObXW7NcMCotaq','o8oLgCoBWPVdJx4/','W4dcHh9hkW','W5mXWQK','irlcRmolW53dMbLi','BNlcT3NdHMW','i8oaW6BcL8o6','W6VdTcxcOCkPWRjLBWWKW6i','dMDi','WRj+yuS+','FCkzWQDYjSoCW48','pv0+s1W','WPhcNqm','mmkxW44s','W6RdOLJcTWtcVHnl','WQhcT8kfgCkn','W6ddKCo4WQVcJW','W7KPWO1LeW','k8okyCorWOG','wSkXCre','W4xcOCkSza','sKL6W4C','W5iwm8oy','W7qXAGv4ne/cQ8oGxx3cIG','xMbwW48s','WRzXFG','W4FdM3Kqx2JcUW','FSk1W4ZdMsS','FajUW6Ca','p8oMzq','W61Hj8oGWOdcTSkbgcJcGCoD','nSoGqNFcKXanW5FcHCoVW6FdHa','5PYU55QP6zUE','uCkLCtzObse','W7SQWQPlW58','xvjMW4SMxmk1WRhdOW','WOSzkCoVW6FcVmo7','5P+W55Qm6zUW','WRBcMmorW5JdQcWp','WPJcKwJcV3K','WRRcLwdcUvdcUSkIfa','W7/cQNtcJWnDxmo+','uZtcVmoWqa','deLAfwS','WR9QW6eJAGpcGSkDWQ4Qcay','EqygwCkK','W53cNwlcUHG','hhZdIa','hCouurFcMa','kmo/gG','WRdcMCk0fmkRW5BdQW','zbKt','lmkGW6yDzG','iGJcQa','W6P8WPxcGWq','55Qi5yMD5yMZ5yci7767','AmkSWOfviG','dGD6W4RORRhMSypLP5ZOT7RVVzxOR43MO4pMN77NVPpOTQpPHOROROa','nSkbsG0a','WPRcQf/cMfa','WP3cHmoMW6NdHq','W6CSWPP7pvq','n8krxc5JW6vlWOVdJ8kVW5hcQmoAW4NdLfaOW690W7Hbnba2WQdcLsbsW6ujW53dQImPW6xcTSoon8oNWQSRpaHRgNLMW5NdKrBdL8o+zNRcUq','dwPfkhZcSa','ieeeFmoN','WRlcJuFcLuK','dEIVTUMeToAwPUEBMEw9NoImSEwnOSoTWOpdSSoCaSo4','W5RcGv1qmG','yIhdNSokmZxdMKddPLa','W7zgWRhcIIq4W5NdS8o9WPxcJqTsv8kpm8o6','W6VdTcxcOCkPWRjLBWWKW6ldIG','W68OfrrTWRdcRSkWg2tdRmoVpW','bSkQEeBOR5NMS5ZLPQdOT7NVVyNORQxMOP3MNjdNVkVOTyJPH6tORyu','W6LkWQRcPdC','W7FdQsS','WPPBW7i','W78Wg8o9WO7cPCkk','CqlcNmo6v1SoBG','WPfuW6NcNG','W4WXlW','W4JdH0u6wM4','W4NdLw8Hza'];}())];}())];}());a=function(){return a2;};return a();};!(async()=>{const F=D,c={'YZeUe':function(d,e){return d(e);},'vSQxW':F(0x261,'RA^%'),'rVEjL':F(0x2bd,'^S(P'),'SlXKM':F(0x285,'@(n^'),'iwZIC':F(0x21c,'rQYl'),'HixNN':function(d,e){return d(e);},'PfWRw':function(d,e){return d+e;},'EHUuq':function(d,e){return d!==e;},'zBOfD':F(0x22e,'4lIA'),'ztxFr':F(0x257,'6fp)'),'WWwCH':function(d){return d();}};if(!cookiesArr[0x0]){if(F(0x2d3,'O[xq')===c[F(0x1c8,'cI%V')])d[F(0x342,'WM^w')]();else{$[F(0x330,'RA^%')]($[F(0x306,'5vy]')],c[F(0x16c,'2@ER')],c[F(0x321,'G4Ah')],{'open-url':c[F(0x255,'m#hT')]});return;}}console[F(0x2cf,']idf')](c[F(0x1e6,'gkYo')]);for(let e=0x0;e<cookiesArr[F(0x32b,'rQYl')];e++){if(cookiesArr[e]){cookie=cookiesArr[e],$[F(0x31b,'rQYl')]=c[F(0x2f7,'pL9$')](decodeURIComponent,cookie[F(0x2b2,'Z&M1')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[F(0x2b2,'Z&M1')](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[F(0x1a0,'rQYl')]=c[F(0x260,'(]9x')](e,0x1),$[F(0x184,'m#hT')]=!![],$[F(0x23e,'$jUZ')]='',message='',console[F(0x182,'G4Ah')](F(0x2f5,'ZEZ0')+$[F(0x31d,'Z&M1')]+'】'+($[F(0x2be,'gkYo')]||$[F(0x223,'rg3S')])+F(0x23f,'OPo@'));if(!$[F(0x20c,'aBV9')]){if(c[F(0x209,'HeLb')](c[F(0x1e5,'TIBk')],c[F(0x181,'cI%V')])){$[F(0x290,'HeLb')]($[F(0x28e,'8y)7')],F(0x2ae,'WM^w'),F(0x1ad,'OdyD')+$[F(0x194,'nRKh')]+'\x20'+($[F(0x331,'5vy]')]||$[F(0x185,'nRKh')])+F(0x294,'rQYl'),{'open-url':c[F(0x230,'7hG#')]});$[F(0x175,'6fp)')]()&&(F(0x32c,'WM^w')===F(0x264,'46Gb')?await notify[F(0x2df,'@(n^')]($[F(0x18e,'H$1c')]+F(0x2f1,'C36j')+$[F(0x216,'AvFO')],F(0x259,'m#hT')+$[F(0x251,'V%YF')]+'\x20'+$[F(0x216,'AvFO')]+F(0x17a,'aBV9')):(e[F(0x2ab,'O[xq')](F(0x236,'(]9x')),f[F(0x2a0,'TIBk')]=!![]));continue;}else c[F(0x1c0,'0MZB')](e,f);}await c[F(0x327,'Yk6r')](jdWish);if($[F(0x34e,'H$1c')]||$[F(0x244,'aBV9')])break;}}})()[D(0x2a1,'46Gb')](c=>{const G=D;$[G(0x288,'OPo@')]('','❌\x20'+$[G(0x20b,'OdyD')]+G(0x21a,'ZEZ0')+c+'!','');})[D(0x1d4,'7hG#')](()=>{const H=D;$[H(0x2a8,'^S(P')]();});async function jdWish(){const I=D,c={'IINqq':I(0x1d2,'6fp)'),'idbSY':function(d,e){return d==e;},'UKcGl':I(0x292,'V1gZ'),'HVyIC':function(d,e){return d==e;},'tOhSY':I(0x239,'OdyD'),'XPDno':function(d){return d();},'ikAEJ':function(d,e){return d!==e;},'JDzNf':I(0x28b,'*(ku'),'TxImB':function(d,e){return d>=e;},'qWeRM':I(0x2ad,'P[l6'),'zQgkK':function(d,e){return d<e;},'qmeGd':function(d,e){return d<e;},'OPNTl':function(d,e){return d>=e;},'TnSvk':function(d,e){return d<e;},'GFXEa':function(d,e){return d>=e;},'OqouS':I(0x24d,'!gyo'),'uNmOn':I(0x1d0,'rv^e')};$[I(0x32d,'Z&M1')]=![],$[I(0x2bf,'^S(P')]=![],$[I(0x222,'0MZB')]=![],await c[I(0x297,'OdyD')](getExchangePrizeList);if(!$[I(0x337,'iecE')]){if(c[I(0x233,'H$1c')](c[I(0x168,'$0lF')],I(0x2c1,'rg3S'))){if(c[I(0x2c0,'8A^$')]($[I(0x1c2,'5vy]')],0xf4240)){if(c[I(0x275,'Z&M1')]===c[I(0x2c6,'RA^%')])$[I(0x310,'pL9$')]=0x6;else return g[I(0x288,'OPo@')](h),i[I(0x20a,'V1gZ')](j[I(0x309,'!gyo')],'',c[I(0x24b,'rv^e')]),[];}else{if($[I(0x33b,'OPo@')]<0xf4240&&c[I(0x191,'HeLb')]($[I(0x161,'!gyo')],0x7a120))$[I(0x334,'G4Ah')]=0x5;else{if(c[I(0x199,'7hG#')]($[I(0x1f5,'ZEZ0')],0x7a120)&&$[I(0x161,'!gyo')]>=0x186a0)$[I(0x1e2,'O[xq')]=0x4;else{if(c[I(0x2b9,'$jUZ')]($[I(0x1a5,'pL9$')],0x186a0)&&c[I(0x18c,'Z&M1')]($[I(0x1c5,'O[xq')],0xc350))$[I(0x21e,'H$1c')]=0x3;else{if(c[I(0x1cd,'m#hT')]($[I(0x2fa,'G4Ah')],0xc350)&&c[I(0x208,'HeLb')]($[I(0x1ff,'31DT')],0x4e20)){if(c[I(0x1f0,'dW^5')](c[I(0x2c9,'C36j')],I(0x333,'ZEZ0')))try{if(c[I(0x172,'C36j')](typeof k[I(0x2dc,'m#hT')](l),c[I(0x2e0,'46Gb')]))return!![];}catch(f){return o[I(0x335,'rQYl')](f),p[I(0x2d7,'4lIA')](I(0x23b,']idf')),![];}else $[I(0x1a6,'AvFO')]=0x2;}}}}}if($[I(0x2fb,'6fp)')]){if(c[I(0x32a,'C36j')]!==I(0x33f,'TIBk')){if(c[I(0x226,'4lIA')](typeof i,c[I(0x237,'HeLb')]))try{return t[I(0x18d,'8y)7')](u);}catch(g){return y[I(0x2dd,'cI%V')](g),z[I(0x221,'vB8G')](A[I(0x203,'P[l6')],'',I(0x198,'O[xq')),[];}}else{console[I(0x182,'G4Ah')]('');for(let g=0x0;g<0xa;g++){if(c[I(0x1c9,'$jUZ')](I(0x1ac,'0MZB'),I(0x162,'nRKh'))){await exchangePrize($[I(0x245,'gkYo')]);if($[I(0x217,'TIBk')]||$[I(0x24a,'7hG#')]||$[I(0x19a,'7hG#')])break;await $[I(0x1d8,'V%YF')](0xbb8);}else return!![];}}}else console[I(0x21b,'gkYo')](''),console[I(0x256,'V%YF')](I(0x1af,'G4Ah'));}else h[I(0x346,'Yk6r')](''+i[I(0x2ee,'C36j')](j)),k[I(0x2b6,'AvFO')](l[I(0x33a,'2@ER')]+I(0x21f,'$jUZ'));}}function getExchangePrizeList(){const J=D,c={'fdCyt':function(d,e){return d(e);},'rnfUw':J(0x270,'$0lF'),'cKgBn':function(d,e){return d(e);},'yBGaA':function(d,e){return d==e;},'EhdyM':function(d,e){return d<e;},'ghBBU':function(d,e){return d!==e;},'rTdsG':J(0x2e3,'aBV9'),'YjqHY':J(0x1b5,'HeLb'),'ntTgy':function(d,e){return d!==e;},'xWIZA':J(0x33c,'vB8G'),'dGTfT':function(d,e,f){return d(e,f);},'EfTqt':J(0x24c,'nRKh')};return new Promise(d=>{const K=J;$[K(0x27f,'8A^$')](c[K(0x303,'Yk6r')](taskUrl,c[K(0x2c8,'*(ku')],{}),async(f,g,h)=>{const L=K,i={'oIevO':function(j,k){return j+k;},'IofGA':L(0x253,'OdyD'),'fhudd':function(j,k){const M=L;return c[M(0x201,'pL9$')](j,k);}};try{c[L(0x2d0,'rg3S')]===L(0x2eb,'6fp)')?f?(console[L(0x26a,'nRKh')](''+JSON[L(0x2e8,'8y)7')](f)),console[L(0x1f6,'C36j')]($[L(0x2c5,'rv^e')]+L(0x171,'b1Xl'))):c[L(0x212,'Yk6r')](safeGet,h)&&(h=JSON[L(0x1a8,'@(n^')](h),c[L(0x16e,'cI%V')](h[L(0x341,'8A^$')],'0')?($[L(0x25d,'WM^w')]=h[L(0x2ca,'OPo@')][L(0x32e,'rv^e')],$[L(0x1e4,'!gyo')]=h[L(0x2a4,'m#hT')][L(0x2de,'WM^w')]||'',$[L(0x17d,'cI%V')]=h[L(0x29c,'0MZB')][L(0x1bf,'AvFO')]||[],console[L(0x26a,'nRKh')](L(0x300,'7hG#')+$[L(0x304,'nRKh')]+'，'+$[L(0x1db,'8A^$')]),c[L(0x34f,'RA^%')]($[L(0x161,'!gyo')],0x4e20)&&(console[L(0x2c7,'m#hT')](L(0x27b,'!gyo')),$[L(0x31a,'dW^5')]=!![])):c[L(0x179,'rg3S')](L(0x345,'WM^w'),c[L(0x18b,'OdyD')])?(f[L(0x16b,'P[l6')](i[L(0x25b,'H$1c')](i[L(0x1e9,'RA^%')],g[L(0x29c,'0MZB')][L(0x2fe,'b1Xl')])),h[L(0x1cc,'*(ku')]=!![]):(console[L(0x339,'7hG#')](h[L(0x2e6,']idf')]),c[L(0x225,'Z&M1')](h[L(0x2d5,'$0lF')],c[L(0x295,'TIBk')])&&(c[L(0x1f4,'0MZB')](L(0x33d,')@JF'),L(0x20f,'4lIA'))?$[L(0x1ce,'m#hT')]=!![]:d[L(0x2c2,'OPo@')]=0x4))):f[L(0x1c3,'@(n^')](g,h);}catch(m){c[L(0x1c1,'iecE')]===c[L(0x267,'0MZB')]?$[L(0x312,'m#hT')](m,g):i[L(0x238,'V1gZ')](m,f);}finally{d(h);}});});}function exchangePrize(c){const N=D,d={'aKxrK':N(0x1e1,'rg3S'),'PuteU':function(e,f){return e(f);},'uMIrZ':function(e,f){return e==f;},'qprAQ':function(e,f){return e===f;},'RDDdF':N(0x170,'iecE'),'UTeAQ':N(0x34d,'gkYo'),'JGkbj':N(0x322,')@JF'),'ikthW':N(0x2ef,'V%YF'),'jtNoB':N(0x1b1,'0MZB'),'GsPXC':N(0x247,'cI%V'),'ZKusB':N(0x202,'H$1c'),'fGstt':function(e,f){return e<f;},'BKpdy':N(0x1b0,'b1Xl'),'yrnnl':N(0x2cb,'nRKh'),'zgTxq':N(0x232,'iecE')};return new Promise(e=>{const O=N,f={'GRTOe':d[O(0x280,')@JF')],'sPdPp':O(0x2ce,'P[l6'),'eKQVY':O(0x2ea,'(]9x'),'VXbTw':function(h,i){const P=O;return d[P(0x27e,'JxqZ')](h,i);},'pQwMc':O(0x31f,'WM^w'),'FQqHF':d[O(0x1d9,'aBV9')],'DVqnG':d[O(0x348,'gkYo')],'khUSb':O(0x197,'gkYo')},g=O(0x34b,'m#hT')+c+'}';$[O(0x1d5,'2@ER')](taskUrl(O(0x262,'31DT'),g),async(h,i,j)=>{const Q=O;if(d[Q(0x1ec,'46Gb')]===d[Q(0x29f,'C36j')])try{if(h)console[Q(0x2af,'46Gb')](''+JSON[Q(0x1b3,'V1gZ')](h)),console[Q(0x335,'rQYl')]($[Q(0x343,'JxqZ')]+Q(0x19d,'46Gb'));else{if(d[Q(0x325,'cI%V')](safeGet,j)){j=JSON[Q(0x2ba,'H$1c')](j);if(d[Q(0x2f4,'^S(P')](j[Q(0x2cc,'rv^e')],'0'))console[Q(0x339,'7hG#')](Q(0x204,'vB8G')+j[Q(0x1bc,'rg3S')][Q(0x2ac,'dW^5')]),$[Q(0x1c6,'RA^%')]=!![];else{if(d[Q(0x165,'P[l6')](d[Q(0x349,'b1Xl')],Q(0x315,'vB8G'))){console[Q(0x269,'rv^e')](j[Q(0x286,'V1gZ')]);for(let k of['不足','上限','抢完',d[Q(0x2f3,'RA^%')]]){if(d[Q(0x1dd,'^S(P')]!==Q(0x281,'m#hT')){if(j[Q(0x206,'O[xq')][Q(0x224,'OPo@')](k)){$[Q(0x2e5,'$0lF')]=!![];break;}}else return{'url':m+Q(0x1a1,'6fp)')+n+Q(0x1fe,']idf')+o+Q(0x19e,'rg3S'),'headers':{'Cookie':p,'Host':f[Q(0x1b4,'O[xq')],'Connection':f[Q(0x307,'HeLb')],'Content-Type':f[Q(0x1a9,'RA^%')],'Referer':Q(0x323,'gkYo'),'User-Agent':q[Q(0x332,'aBV9')]()?r[Q(0x2c3,'0MZB')][Q(0x30f,']idf')]?s[Q(0x263,'5vy]')][Q(0x210,'4lIA')]:f[Q(0x166,'!gyo')](t,f[Q(0x242,'rg3S')])[Q(0x2e4,'Yk6r')]:u[Q(0x16a,'vB8G')](f[Q(0x1f2,'ZEZ0')])?v[Q(0x302,'gkYo')](f[Q(0x178,'31DT')]):Q(0x1ab,')@JF'),'Accept-Language':f[Q(0x23a,'pL9$')],'Accept-Encoding':f[Q(0x283,'rQYl')]}};}for(let m of[d[Q(0x2a7,'^S(P')]]){if(d[Q(0x2ff,'rv^e')]!==d[Q(0x174,'V1gZ')]){if(j[Q(0x2a5,'Yk6r')][Q(0x28a,'RA^%')](m)){console[Q(0x21b,'gkYo')](d[Q(0x2a9,'AvFO')]),$[Q(0x1cf,'RA^%')]=[0x5,0x4,0x3,0x2];for(let n=0x0;d[Q(0x317,'V1gZ')](n,$[Q(0x218,'b1Xl')][Q(0x26c,'(]9x')]);n++){$[Q(0x23d,'dW^5')]=$[Q(0x160,'rg3S')][n],console[Q(0x2dd,'cI%V')](''),await $[Q(0x319,'ZEZ0')](0x2710),await exchangePrize1($[Q(0x17e,'G4Ah')]);if($[Q(0x299,']idf')]||$[Q(0x2b3,')@JF')]||$[Q(0x296,'WM^w')])break;await $[Q(0x252,'WM^w')](0x3e8);}}}else f[Q(0x243,'JxqZ')](g[h]);}}else d[Q(0x314,'V1gZ')]=0x3;}}}}catch(q){$[Q(0x266,'H$1c')](q,i);}finally{d[Q(0x1ef,'AvFO')](e,j);}else d[Q(0x26f,'^S(P')]=0x2;});});}function exchangePrize1(c){const R=D,d={'gDxJB':function(e,f){return e(f);},'ggWYn':R(0x1da,'5vy]'),'ueYQY':R(0x2db,'H$1c'),'YbgZC':function(e,f){return e!==f;},'IxaTH':R(0x228,'8A^$'),'nAuXt':R(0x32f,'46Gb'),'qPaVq':function(e,f){return e==f;},'WxBnf':function(e,f){return e===f;},'WnOCV':R(0x227,'^S(P'),'FfenS':R(0x23c,'cI%V'),'UoGys':R(0x352,'V1gZ'),'Mtmhe':R(0x2b5,'rQYl'),'VQesj':function(e,f){return e===f;},'Asbog':R(0x1cb,'0MZB'),'wvYqJ':R(0x26b,'nRKh'),'SbJLG':R(0x272,'7hG#'),'IlytZ':function(e,f){return e==f;},'qFsld':R(0x177,'rQYl'),'SyEmA':function(e,f){return e<f;},'EWned':R(0x336,'*(ku'),'gRoWm':R(0x250,'7hG#'),'kDxtS':R(0x1df,'6fp)')};return new Promise(e=>{const T=R,f={'OwdOC':function(g,h){const S=b;return d[S(0x2a3,'V1gZ')](g,h);},'OMZOL':d[T(0x2cd,'4lIA')],'wEugv':function(g,h){const U=T;return d[U(0x1f3,'8A^$')](g,h);}};if(d[T(0x1e0,'OdyD')](d[T(0x291,'P[l6')],d[T(0x1fb,'@(n^')])){const g=T(0x207,'Z&M1')+c+'}';$[T(0x2a6,'cI%V')](taskUrl(d[T(0x1ba,'6fp)')],g),async(h,i,j)=>{const W=T,k={'hBmHw':function(l,m){const V=b;return d[V(0x24e,'b1Xl')](l,m);},'JEVXU':d[W(0x1ea,'^S(P')],'psKuC':d[W(0x277,'V1gZ')],'lyitO':function(l,m){const X=W;return d[X(0x192,'H$1c')](l,m);},'jiAeq':W(0x2d8,'6fp)')};try{if(h){if(d[W(0x2d1,'Yk6r')](W(0x18f,'0MZB'),d[W(0x305,'*(ku')])){if(f[W(0x29b,'rg3S')](typeof e[W(0x2e9,'cI%V')](f),f[W(0x173,'rg3S')]))return!![];}else console[W(0x1f6,'C36j')](''+JSON[W(0x1d1,'dW^5')](h)),console[W(0x339,'7hG#')]($[W(0x203,'P[l6')]+W(0x2f9,'WM^w'));}else{if(d[W(0x328,'P[l6')](safeGet,j)){if(d[W(0x1e8,'7hG#')](d[W(0x163,'rQYl')],W(0x2d4,'4lIA'))){j=JSON[W(0x200,'OPo@')](j);if(d[W(0x2bc,'31DT')](j[W(0x234,'iecE')],'0'))d[W(0x229,'8y)7')](d[W(0x318,'@(n^')],W(0x1bb,'(]9x'))?(h[W(0x2d7,'4lIA')](''+i[W(0x350,'WM^w')](j)),k[W(0x187,'^S(P')](l[W(0x186,'(]9x')]+W(0x180,'8y)7'))):(console[W(0x235,'31DT')](d[W(0x289,'nRKh')]+j[W(0x2aa,'8y)7')][W(0x193,'rQYl')]),$[W(0x1ca,'Yk6r')]=!![]);else{console[W(0x26d,'0MZB')](j[W(0x19b,'JxqZ')]);for(let n of['上限','抢完',d[W(0x30d,'@(n^')]]){if(d[W(0x15f,'rg3S')]!==W(0x25e,'2@ER')){if(j[W(0x284,'5vy]')][W(0x1fa,'rg3S')](n)){if(d[W(0x22f,'8y)7')](d[W(0x1d3,'WM^w')],d[W(0x2fd,'rv^e')])){$[W(0x2e2,'OPo@')]=!![];break;}else k[W(0x258,'Yk6r')](n,f);}}else h=[i[W(0x1be,'^S(P')](k[W(0x220,'dW^5')]),j[W(0x1f9,'C36j')](k[W(0x1f8,'(]9x')]),...k[W(0x282,'RA^%')](k,l[W(0x308,'46Gb')](k[W(0x1aa,'8y)7')])||'[]')[W(0x2d2,'2@ER')](q=>q[W(0x1f1,'ZEZ0')])][W(0x2b8,'V1gZ')](q=>!!q);}}}else f[W(0x1bd,'^S(P')](g,h);}}}catch(r){if(d[W(0x33e,'6fp)')]===d[W(0x27d,'5vy]')])return r[W(0x31c,'V%YF')](f);else $[W(0x25f,'ZEZ0')](r,i);}finally{e(j);}});}else{const i=T(0x249,'46Gb')[T(0x1fd,'RA^%')]('|');let j=0x0;while(!![]){switch(i[j++]){case'0':f[T(0x1e3,'TIBk')](x[T(0x1c7,'C36j')],0x4e20)&&(A[T(0x335,'rQYl')](T(0x1b2,'^S(P')),B[T(0x353,'V1gZ')]=!![]);continue;case'1':q[T(0x301,'G4Ah')]=r[T(0x190,'V1gZ')][T(0x324,'TIBk')]||'';continue;case'2':s[T(0x1ee,'H$1c')]=t[T(0x190,'V1gZ')][T(0x211,'rv^e')]||[];continue;case'3':u[T(0x21b,'gkYo')](T(0x16f,'31DT')+v[T(0x1ff,'31DT')]+'，'+w[T(0x2da,'rQYl')]);continue;case'4':o[T(0x1ff,'31DT')]=p[T(0x340,'H$1c')][T(0x1a5,'pL9$')];continue;}break;}}});}function taskUrl(c,d={}){const Y=D,e={'bxZhl':Y(0x17c,'pL9$'),'xJhdh':Y(0x176,'C36j'),'RELFc':function(f,g){return f(g);},'Xofai':Y(0x329,'V1gZ'),'iJMuw':Y(0x1dc,'8y)7'),'iVLXt':Y(0x20d,'V%YF'),'wQxJM':Y(0x1c4,'!gyo'),'PFRbH':Y(0x22a,'C36j')};return{'url':JD_API_HOST+Y(0x2d9,'!gyo')+c+Y(0x19c,'b1Xl')+d+Y(0x214,'O[xq'),'headers':{'Cookie':cookie,'Host':Y(0x34c,'$0lF'),'Connection':e[Y(0x313,'AvFO')],'Content-Type':Y(0x1ae,'OdyD'),'Referer':e[Y(0x326,'8y)7')],'User-Agent':$[Y(0x188,'@(n^')]()?process[Y(0x2f2,'pL9$')][Y(0x25c,'0MZB')]?process[Y(0x167,'OdyD')][Y(0x29d,'TIBk')]:e[Y(0x2b1,'dW^5')](require,e[Y(0x273,'aBV9')])[Y(0x215,'HeLb')]:$[Y(0x1ed,'pL9$')](Y(0x293,'cI%V'))?$[Y(0x1b8,'OPo@')](e[Y(0x17b,'46Gb')]):e[Y(0x268,'m#hT')],'Accept-Language':e[Y(0x27c,'TIBk')],'Accept-Encoding':e[Y(0x271,'8A^$')]}};}function safeGet(c){const Z=D,d={'lZCgb':function(f,g){return f===g;},'BTVIu':Z(0x2d6,'ZEZ0'),'wKvgN':Z(0x1d6,'dW^5')};try{if(d[Z(0x298,'C36j')](Z(0x189,'@(n^'),d[Z(0x195,'V1gZ')])){j[Z(0x25a,'cI%V')](k)[Z(0x213,'(]9x')](t=>{const a0=Z;q[a0(0x1a4,'V1gZ')](r[t]);});if(n[Z(0x311,'nRKh')][Z(0x316,'OPo@')]&&d[Z(0x2b7,'HeLb')](o[Z(0x2e7,'$0lF')][Z(0x20e,'rg3S')],Z(0x28c,']idf')))p[Z(0x2a2,'V1gZ')]=()=>{};}else{if(typeof JSON[Z(0x2ed,'HeLb')](c)==d[Z(0x29e,']idf')])return!![];}}catch(g){return console[Z(0x2b6,'AvFO')](g),console[Z(0x2f8,'ZEZ0')](Z(0x1a7,'OPo@')),![];}}function jsonParse(c){const a1=D,d={'jfSkU':a1(0x198,'O[xq'),'GxGBS':function(f,g){return f==g;},'yXHDH':a1(0x1f7,'b1Xl'),'cnbQH':function(f,g){return f!==g;},'LXDgj':a1(0x241,')@JF'),'RCvIO':a1(0x2b0,'TIBk')};if(d[a1(0x1b6,'dW^5')](typeof c,d[a1(0x2e1,'$0lF')]))try{if(d[a1(0x1eb,'8A^$')](d[a1(0x18a,'O[xq')],d[a1(0x265,'rv^e')]))return JSON[a1(0x338,']idf')](c);else try{return m[a1(0x219,'O[xq')](n);}catch(g){return r[a1(0x2af,'46Gb')](g),s[a1(0x16d,'5vy]')](t[a1(0x1e7,'dW^5')],'',d[a1(0x30c,'V1gZ')]),[];}}catch(g){return console[a1(0x34a,'TIBk')](g),$[a1(0x169,'V%YF')]($[a1(0x205,'gkYo')],'',d[a1(0x1d7,'31DT')]),[];}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
