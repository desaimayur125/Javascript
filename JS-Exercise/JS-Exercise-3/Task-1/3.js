
        let str = '<p><strong><em>Javascript Exercises</em></strong></p>';
       function removetags(str){
        return str.replace(/<.*?>/g,'');
       }
       console.log(removetags(str))
 