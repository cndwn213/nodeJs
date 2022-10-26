const {Octokit} = require("@octokit/core");

const octokit = new Octokit({
    auth:""
});

let createIssue = async (owner, repo, title, body, labels) => {
    // await octokit.request('GET /repos/cndwn213/nodeJs/issues', {
    //     owner :owner,
    //     repo : repo, 
    //     title : title,
    //     body : body,
    //     labels : labels 
    // })
    
    await octokit.request(`POST /repos/${owner}/${repo}/issues`, {
        owner: owner,
        repo: repo,
        title : title,
        body : body,
        labels : labels 
    });
};


createIssue('cndwn213','nodeJs',"테스트 이슈 - 개발자의 품격", "이것은 테스트입니다.", ["bug"]);