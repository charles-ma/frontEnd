(function () {
	var 
		mergeSort = {
			/* generate an array of length = len, max value = range - 1 */
			'generateArr': function(len, range) {
				var arr = new Array(len);
				for (var i = 0; i < len; i++) {
					arr[i] = Math.floor(Math.random() * range);
				}
				return arr;
			},

			/* sort the given array */
			'sortArr': function(arr) {
				if (arr.length == 1) return arr;
				var 
					m = Math.floor(arr.length / 2),
					sortedSubArr1 = this.sortArr(arr.slice(0, m)),
					sortedSubArr2 = this.sortArr(arr.slice(m, arr.length)),
		  			reArr = new Array(),
					i = j = k = 0;
				while (i < sortedSubArr1.length && j < sortedSubArr2.length) {
					if (sortedSubArr1[i] < sortedSubArr2[j]) reArr[k++] = sortedSubArr1[i++];
					else reArr[k++] = sortedSubArr2[j++];
				}
				while (i < sortedSubArr1.length) reArr[k++] = sortedSubArr1[i++];
				while (j < sortedSubArr2.length) reArr[k++] = sortedSubArr2[j++];
				return reArr;
			}
		};
	var testArr = mergeSort.generateArr(10, 20),
		resultArr = mergeSort.sortArr(testArr);
	console.log('test array:' + testArr.join() + '\nsorted array:' + resultArr.join());
})();