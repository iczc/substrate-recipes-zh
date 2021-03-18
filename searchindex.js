Object.assign(window.search, {"doc_urls":["introduction.html#substrate-recipes-","introduction.html#使用说明","pallets-intro.html#pallets","runtime-printing.html#printing-to-the-node-log","events.html#emitting-events","storage-maps.html#storage-maps","cache.html#cache-locally--storage-calls","vec-set.html#using-vectors-as-sets","map-set.html#using-maps-as-sets","double.html#subgroup-removal-by-subkey-double-maps","structs.html#storing-custom-structs","ringbuffer.html#ringbuffer-queue","basic-token.html#basic-token","constants.html#configurable-constants","crowdfund.html#simple-crowdfund","instantiable.html#instantiable-pallets","weights.html#weights-for-resource-accounting","charity.html#charity-and-imbalances","fixed-point.html#fixed-point-arithmetic","off-chain-workers/index.html#off-chain-workers","off-chain-workers/transactions.html#transactions","off-chain-workers/http-json.html#http-fetching--json-parsing","off-chain-workers/storage.html#local-storage","currency.html#currency-types","currency-imbalances.html#currency-and-imbalances","randomness.html#generating-randomness","pallet-coupling.html#tightly--and-loosely-coupled-pallets","runtimes-intro.html#runtimes","runtime-api.html#runtime-apis","fees.html#transaction-fees-for-economic-security","consensus-intro.html#consensus","sha3-pow-consensus.html#sha3-pow-consensus-algorithms","nodes-intro.html#nodes","kitchen-node.html#kitchen-node---an-reusable-instant-seal-node","custom-rpc.html#custom-rpcs","basic-pow.html#basic-proof-of-work-node","hybrid-consensus.html#hybrid-powpos-consensus-node"],"index":{"documentStore":{"docInfo":{"0":{"body":8,"breadcrumbs":3,"title":2},"1":{"body":6,"breadcrumbs":1,"title":0},"10":{"body":0,"breadcrumbs":7,"title":3},"11":{"body":0,"breadcrumbs":5,"title":2},"12":{"body":0,"breadcrumbs":5,"title":2},"13":{"body":0,"breadcrumbs":5,"title":2},"14":{"body":0,"breadcrumbs":5,"title":2},"15":{"body":0,"breadcrumbs":5,"title":2},"16":{"body":0,"breadcrumbs":7,"title":3},"17":{"body":0,"breadcrumbs":5,"title":2},"18":{"body":0,"breadcrumbs":7,"title":3},"19":{"body":0,"breadcrumbs":5,"title":2},"2":{"body":0,"breadcrumbs":2,"title":1},"20":{"body":0,"breadcrumbs":5,"title":1},"21":{"body":0,"breadcrumbs":11,"title":4},"22":{"body":0,"breadcrumbs":7,"title":2},"23":{"body":0,"breadcrumbs":5,"title":2},"24":{"body":0,"breadcrumbs":5,"title":2},"25":{"body":0,"breadcrumbs":5,"title":2},"26":{"body":0,"breadcrumbs":9,"title":4},"27":{"body":0,"breadcrumbs":2,"title":1},"28":{"body":0,"breadcrumbs":5,"title":2},"29":{"body":0,"breadcrumbs":9,"title":4},"3":{"body":0,"breadcrumbs":7,"title":3},"30":{"body":0,"breadcrumbs":2,"title":1},"31":{"body":0,"breadcrumbs":9,"title":4},"32":{"body":0,"breadcrumbs":2,"title":1},"33":{"body":0,"breadcrumbs":13,"title":6},"34":{"body":0,"breadcrumbs":5,"title":2},"35":{"body":0,"breadcrumbs":9,"title":4},"36":{"body":0,"breadcrumbs":9,"title":4},"4":{"body":0,"breadcrumbs":5,"title":2},"5":{"body":0,"breadcrumbs":5,"title":2},"6":{"body":0,"breadcrumbs":9,"title":4},"7":{"body":0,"breadcrumbs":7,"title":3},"8":{"body":0,"breadcrumbs":7,"title":3},"9":{"body":0,"breadcrumbs":11,"title":5}},"docs":{"0":{"body":"A Hands-On Cookbook for Aspiring Blockchain Chefs Substrate Recipes是一本关于使用示例的书，它示范了使用 Substrate 构建区块链的最佳实践，每个示例包含了完整的可用代码并对这些代码作了详细的解释说明。","breadcrumbs":"Introduction » Substrate Recipes 🍴😋🍴","id":"0","title":"Substrate Recipes 🍴😋🍴"},"1":{"body":"你可以按照任意顺序阅读本书，如果你有想深入研究的主题，知道要找的关键字，请使用顶部的搜索按钮进行搜索。目录列表大致是按照复杂程度递增的。 你很难仅阅读教程就学会构建Substrate区块链，因此在学习过程中，可以对每个示例进行编译、测试和修改。通过这种方法学习代码与范式，然后尝试将其应用到你想解决的问题中去! 所以现在让我们克隆下面这个代码库吧。 git clone https://github.com/substrate-developer-hub/recipes.git","breadcrumbs":"Introduction » 使用说明","id":"1","title":"使用说明"},"10":{"body":"","breadcrumbs":"Pallets » Storing custom structs » Storing custom structs","id":"10","title":"Storing custom structs"},"11":{"body":"","breadcrumbs":"Pallets » Ringbuffer Queue » Ringbuffer Queue","id":"11","title":"Ringbuffer Queue"},"12":{"body":"","breadcrumbs":"Pallets » Basic Token » Basic Token","id":"12","title":"Basic Token"},"13":{"body":"","breadcrumbs":"Pallets » Configurable Constants » Configurable Constants","id":"13","title":"Configurable Constants"},"14":{"body":"","breadcrumbs":"Pallets » Simple Crowdfund » Simple Crowdfund","id":"14","title":"Simple Crowdfund"},"15":{"body":"","breadcrumbs":"Pallets » Instantiable Pallets » Instantiable Pallets","id":"15","title":"Instantiable Pallets"},"16":{"body":"","breadcrumbs":"Pallets » Weights for Resource Accounting » Weights for Resource Accounting","id":"16","title":"Weights for Resource Accounting"},"17":{"body":"","breadcrumbs":"Pallets » Charity and Imbalances » Charity and Imbalances","id":"17","title":"Charity and Imbalances"},"18":{"body":"","breadcrumbs":"Pallets » Fixed Point Arithmetic » Fixed Point Arithmetic","id":"18","title":"Fixed Point Arithmetic"},"19":{"body":"","breadcrumbs":"Pallets » Off-chain Workers » Off-chain Workers","id":"19","title":"Off-chain Workers"},"2":{"body":"","breadcrumbs":"Pallets » Pallets","id":"2","title":"Pallets"},"20":{"body":"","breadcrumbs":"Pallets » Off-chain Workers » Transactions » Transactions","id":"20","title":"Transactions"},"21":{"body":"","breadcrumbs":"Pallets » Off-chain Workers » HTTP Fetching & JSON Parsing » HTTP Fetching & JSON Parsing","id":"21","title":"HTTP Fetching & JSON Parsing"},"22":{"body":"","breadcrumbs":"Pallets » Off-chain Workers » Local Storage » Local Storage","id":"22","title":"Local Storage"},"23":{"body":"","breadcrumbs":"Pallets » Currency Types » Currency Types","id":"23","title":"Currency Types"},"24":{"body":"","breadcrumbs":"Pallets » Currency and Imbalances » Currency and Imbalances","id":"24","title":"Currency and Imbalances"},"25":{"body":"","breadcrumbs":"Pallets » Generating Randomness » Generating Randomness","id":"25","title":"Generating Randomness"},"26":{"body":"","breadcrumbs":"Pallets » Tightly- and Loosely-Coupled Pallets » Tightly- and Loosely-Coupled Pallets","id":"26","title":"Tightly- and Loosely-Coupled Pallets"},"27":{"body":"","breadcrumbs":"Runtimes » Runtimes","id":"27","title":"Runtimes"},"28":{"body":"","breadcrumbs":"Runtimes » Runtime APIs » Runtime APIs","id":"28","title":"Runtime APIs"},"29":{"body":"","breadcrumbs":"Runtimes » Transaction Fees for Economic Security » Transaction Fees for Economic Security","id":"29","title":"Transaction Fees for Economic Security"},"3":{"body":"","breadcrumbs":"Pallets » Printing to the Node Log » Printing to the Node Log","id":"3","title":"Printing to the Node Log"},"30":{"body":"","breadcrumbs":"Consensus » Consensus","id":"30","title":"Consensus"},"31":{"body":"","breadcrumbs":"Consensus » Sha3 Pow Consensus Algorithms » Sha3 Pow Consensus Algorithms","id":"31","title":"Sha3 Pow Consensus Algorithms"},"32":{"body":"","breadcrumbs":"Nodes » Nodes","id":"32","title":"Nodes"},"33":{"body":"","breadcrumbs":"Nodes » Kitchen Node - An reusable instant seal node » Kitchen Node - An reusable instant seal node","id":"33","title":"Kitchen Node - An reusable instant seal node"},"34":{"body":"","breadcrumbs":"Nodes » Custom RPCs » Custom RPCs","id":"34","title":"Custom RPCs"},"35":{"body":"","breadcrumbs":"Nodes » Basic Proof of Work Node » Basic Proof of Work Node","id":"35","title":"Basic Proof of Work Node"},"36":{"body":"","breadcrumbs":"Nodes » Hybrid PoW/PoS Consensus Node » Hybrid PoW/PoS Consensus Node","id":"36","title":"Hybrid PoW/PoS Consensus Node"},"4":{"body":"","breadcrumbs":"Pallets » Emitting Events » Emitting Events","id":"4","title":"Emitting Events"},"5":{"body":"","breadcrumbs":"Pallets » Storage Maps » Storage Maps","id":"5","title":"Storage Maps"},"6":{"body":"","breadcrumbs":"Pallets » Cache Locally > Storage Calls » Cache Locally > Storage Calls","id":"6","title":"Cache Locally > Storage Calls"},"7":{"body":"","breadcrumbs":"Pallets » Using Vectors as Sets » Using Vectors as Sets","id":"7","title":"Using Vectors as Sets"},"8":{"body":"","breadcrumbs":"Pallets » Using Maps as Sets » Using Maps as Sets","id":"8","title":"Using Maps as Sets"},"9":{"body":"","breadcrumbs":"Pallets » Subgroup Removal by Subkey: Double Maps » Subgroup Removal by Subkey: Double Maps","id":"9","title":"Subgroup Removal by Subkey: Double Maps"}},"length":37,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":1,"docs":{"31":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"28":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"12":{"tf":1.0},"35":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":3,"docs":{"30":{"tf":1.0},"31":{"tf":1.0},"36":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"26":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"23":{"tf":1.0},"24":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"10":{"tf":1.0},"34":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"29":{"tf":1.0}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"29":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"21":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"18":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"25":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":1,"docs":{"21":{"tf":1.0}},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"u":{"b":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"y":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"b":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"17":{"tf":1.0},"24":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"33":{"tf":1.0}},"i":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"21":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"33":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"22":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"26":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"5":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":5,"docs":{"3":{"tf":1.0},"32":{"tf":1.0},"33":{"tf":1.4142135623730951},"35":{"tf":1.0},"36":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"15":{"tf":1.0},"2":{"tf":1.0},"26":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"21":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}},"w":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":1,"docs":{"36":{"tf":1.0}}}}},"df":1,"docs":{"31":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"35":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"25":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"9":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"16":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"33":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"c":{"df":1,"docs":{"34":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"27":{"tf":1.0},"28":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"33":{"tf":1.0}}}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}},"h":{"a":{"3":{"df":1,"docs":{"31":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"22":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"b":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"9":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"26":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"20":{"tf":1.0},"29":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"23":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"35":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":1,"docs":{"31":{"tf":1.7320508075688772}}}}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"28":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.7320508075688772}}}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"35":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":4,"docs":{"19":{"tf":1.7320508075688772},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":3,"docs":{"30":{"tf":1.7320508075688772},"31":{"tf":2.0},"36":{"tf":1.7320508075688772}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"26":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"14":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"23":{"tf":1.7320508075688772},"24":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"34":{"tf":1.7320508075688772}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"29":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"29":{"tf":1.7320508075688772}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"21":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"18":{"tf":1.7320508075688772}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"25":{"tf":1.7320508075688772}}}}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":1,"docs":{"21":{"tf":1.7320508075688772}},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"u":{"b":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"y":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"36":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"b":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"17":{"tf":1.7320508075688772},"24":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"33":{"tf":1.7320508075688772}},"i":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"21":{"tf":1.7320508075688772}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"33":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"22":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"26":{"tf":1.7320508075688772}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"5":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":6,"docs":{"3":{"tf":1.7320508075688772},"32":{"tf":1.7320508075688772},"33":{"tf":2.6457513110645907},"34":{"tf":1.0},"35":{"tf":2.0},"36":{"tf":2.0}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":25,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":2.0},"16":{"tf":1.0},"17":{"tf":1.0},"18":{"tf":1.0},"19":{"tf":1.0},"2":{"tf":1.7320508075688772},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0},"25":{"tf":1.0},"26":{"tf":2.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"21":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.7320508075688772}}}}},"w":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":1,"docs":{"36":{"tf":1.7320508075688772}}}}},"df":1,"docs":{"31":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"35":{"tf":1.7320508075688772}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"25":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"33":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}}},"p":{"c":{"df":1,"docs":{"34":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":3,"docs":{"27":{"tf":1.7320508075688772},"28":{"tf":2.0},"29":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"33":{"tf":1.7320508075688772}}}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"29":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"t":{"df":2,"docs":{"7":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}}},"h":{"a":{"3":{"df":1,"docs":{"31":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"14":{"tf":1.7320508075688772}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"22":{"tf":1.7320508075688772},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"u":{"b":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":2.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"26":{"tf":1.7320508075688772}}}}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"20":{"tf":1.7320508075688772},"29":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"23":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"7":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"35":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"r":{"df":4,"docs":{"19":{"tf":1.7320508075688772},"20":{"tf":1.0},"21":{"tf":1.0},"22":{"tf":1.0}}}}}}}}}},"title":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":1,"docs":{"31":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"28":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"12":{"tf":1.0},"35":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":3,"docs":{"30":{"tf":1.0},"31":{"tf":1.0},"36":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"26":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":2,"docs":{"23":{"tf":1.0},"24":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"10":{"tf":1.0},"34":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"29":{"tf":1.0}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"29":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"21":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"18":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"25":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":1,"docs":{"21":{"tf":1.0}}}}},"y":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"b":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"17":{"tf":1.0},"24":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"33":{"tf":1.0}},"i":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"21":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"33":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"22":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"26":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":3,"docs":{"5":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":5,"docs":{"3":{"tf":1.0},"32":{"tf":1.0},"33":{"tf":1.4142135623730951},"35":{"tf":1.0},"36":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"15":{"tf":1.0},"2":{"tf":1.0},"26":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"21":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}},"w":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":1,"docs":{"36":{"tf":1.0}}}}},"df":1,"docs":{"31":{"tf":1.0}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":1,"docs":{"35":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"25":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"9":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"16":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"33":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"c":{"df":1,"docs":{"34":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"27":{"tf":1.0},"28":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"33":{"tf":1.0}}}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}},"h":{"a":{"3":{"df":1,"docs":{"31":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"22":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"b":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"9":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"26":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"20":{"tf":1.0},"29":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"23":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"35":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});