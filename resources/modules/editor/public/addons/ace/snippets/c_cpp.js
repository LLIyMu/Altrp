ace.define("ace/snippets/c_cpp", ["require", "exports", "module"], function (
  e,
  t,
  n
) {
  "use strict";
  (t.snippetText =
    "## STL Collections\n# std::array\nsnippet array\n	std::array<${1:T}, ${2:N}> ${3};${4}\n# std::vector\nsnippet vector\n	std::vector<${1:T}> ${2};${3}\n# std::deque\nsnippet deque\n	std::deque<${1:T}> ${2};${3}\n# std::forward_list\nsnippet flist\n	std::forward_list<${1:T}> ${2};${3}\n# std::list\nsnippet list\n	std::list<${1:T}> ${2};${3}\n# std::set\nsnippet set\n	std::set<${1:T}> ${2};${3}\n# std::map\nsnippet map\n	std::map<${1:Key}, ${2:T}> ${3};${4}\n# std::multiset\nsnippet mset\n	std::multiset<${1:T}> ${2};${3}\n# std::multimap\nsnippet mmap\n	std::multimap<${1:Key}, ${2:T}> ${3};${4}\n# std::unordered_set\nsnippet uset\n	std::unordered_set<${1:T}> ${2};${3}\n# std::unordered_map\nsnippet umap\n	std::unordered_map<${1:Key}, ${2:T}> ${3};${4}\n# std::unordered_multiset\nsnippet umset\n	std::unordered_multiset<${1:T}> ${2};${3}\n# std::unordered_multimap\nsnippet ummap\n	std::unordered_multimap<${1:Key}, ${2:T}> ${3};${4}\n# std::stack\nsnippet stack\n	std::stack<${1:T}> ${2};${3}\n# std::queue\nsnippet queue\n	std::queue<${1:T}> ${2};${3}\n# std::priority_queue\nsnippet pqueue\n	std::priority_queue<${1:T}> ${2};${3}\n##\n## Access Modifiers\n# private\nsnippet pri\n	private\n# protected\nsnippet pro\n	protected\n# public\nsnippet pub\n	public\n# friend\nsnippet fr\n	friend\n# mutable\nsnippet mu\n	mutable\n## \n## Class\n# class\nsnippet cl\n	class ${1:`Filename('$1', 'name')`} \n	{\n	public:\n		$1(${2});\n		~$1();\n\n	private:\n		${3:/* data */}\n	};\n# member function implementation\nsnippet mfun\n	${4:void} ${1:`Filename('$1', 'ClassName')`}::${2:memberFunction}(${3}) {\n		${5:/* code */}\n	}\n# namespace\nsnippet ns\n	namespace ${1:`Filename('', 'my')`} {\n		${2}\n	} /* namespace $1 */\n##\n## Input/Output\n# std::cout\nsnippet cout\n	std::cout << ${1} << std::endl;${2}\n# std::cin\nsnippet cin\n	std::cin >> ${1};${2}\n##\n## Iteration\n# for i \nsnippet fori\n	for (int ${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n		${4:/* code */}\n	}${5}\n\n# foreach\nsnippet fore\n	for (${1:auto} ${2:i} : ${3:container}) {\n		${4:/* code */}\n	}${5}\n# iterator\nsnippet iter\n	for (${1:std::vector}<${2:type}>::${3:const_iterator} ${4:i} = ${5:container}.begin(); $4 != $5.end(); ++$4) {\n		${6}\n	}${7}\n\n# auto iterator\nsnippet itera\n	for (auto ${1:i} = $1.begin(); $1 != $1.end(); ++$1) {\n		${2:std::cout << *$1 << std::endl;}\n	}${3}\n##\n## Lambdas\n# lamda (one line)\nsnippet ld\n	[${1}](${2}){${3:/* code */}}${4}\n# lambda (multi-line)\nsnippet lld\n	[${1}](${2}){\n		${3:/* code */}\n	}${4}\n"),
    (t.scope = "c_cpp");
});
(function () {
  ace.require(["ace/snippets/c_cpp"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
