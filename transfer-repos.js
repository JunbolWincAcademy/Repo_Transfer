const axios = require('axios');

const token = 'Y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';
const orgName = 'JunbolWincAcademy'; //organization
const repos = ['Caro-Nonno-Pizzeria', 'Tokyo', 'crepes-recipe']; // List your repositories here

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
