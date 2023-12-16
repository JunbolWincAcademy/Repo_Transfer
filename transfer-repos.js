const axios = require('axios');

const token = process.env.GITHUB_TOKEN;

const orgName = 'JunbolFreeCodeCamp'; //organization
const repos = ['Personal_Portfolio_Project-FreeCodeCamp']; // List your repositories here: 'YOUR REPO', 'YOUR REPO'

const githubApi = 'https://api.github.com';
const headers = {
  Authorization: `token ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

const transferRepo = async (repoName) => {
  const url = `${githubApi}/repos/Junbol/${repoName}/transfer`;
  try {
    const response = await axios.post(url, { new_owner: orgName }, { headers });
    console.log(`Transferred ${repoName}: `, response.data);
  } catch (error) {
    console.error(`Error transferring ${repoName}: `, error.response.data);
  }
};

const main = async () => {
  for (const repo of repos) {
    await transferRepo(repo);
  }
};

main();
