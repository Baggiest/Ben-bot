const { ShardingManager } = require("discord.js");
require("dotenv").config();


// Create your ShardingManager instance
const manager = new ShardingManager("./index.js", {
    // for ShardingManager options see:
    totalShards: "auto",
    token: process.env.TOKEN
});

// Emitted when a shard is created
manager.on("shardCreate", (shard) => console.log(`Shard ${shard.id} launched`));

// Spawn your shards
manager.spawn();
