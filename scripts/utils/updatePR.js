const fetch = require('node-fetch');

const pullRequestNumber = process.env.PULL_REQUEST_NUMBER; // 替换为你的 Pull Request 编号
const accessToken = process.env.GITHUB_TOKEN;

module.exports.updatePullRequest = async (content) => {
  const body = {
    body: content, // 要更新的 Pull Request 描述
    // 其他可更新的字段...
  };

  const response = await fetch(
    `https://api.github.com/repos/ncqwer/github_action_playground/pulls/${pullRequestNumber}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify(body),
    },
  )
    .then((res) => res.json())
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    });

  // eslint-disable-next-line no-console
  console.log(response.message);
};
