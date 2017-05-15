(function () {
	'use strict';

	angular
		.module('ng-dom-to-pdf')
		.service('ngDomToPdf', ngDomToPdf);

	ngDomToPdf.$inject = [];

	function ngDomToPdf() {
		return {
			downloadElementToPdf:downloadElementToPdf
		};

		function downloadElementToPdf(elementToPdf, pdfName) {
			return domtoimage.toPng(elementToPdf).then(function (elementDataUrl) {
				var docDefinition = {content: [{image: elementDataUrl, width: 500}]};
				return pdfMake.createPdf(docDefinition).download((pdfName || "download") + ".pdf");
			});
		}
	}

})();