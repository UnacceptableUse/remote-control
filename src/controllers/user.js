module.exports.followedServers = async user => {
  const { getFollowedServers } = require("../models/serverMembers");
  const checkFollowed = await getFollowedServers(user.id);
  let followed = [];
  checkFollowed.forEach(server => {
    if (server.status.member === true) followed.push(server.server_id);
  });
  console.log(followed);
  return followed;
};
