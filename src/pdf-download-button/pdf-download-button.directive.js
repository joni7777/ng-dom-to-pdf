(function () {
	'use strict';

	angular
		.module('pdf-download-button')
		.directive('pdf-download-button', pdfDownloadButton);

	pdfDownloadButton.$inject = ['ngDomToPdf'];

	function pdfDownloadButton(ngDomToPdf) {
		return {
			restrict: 'A',
			scope: {
				pdfName: '=',
				pdfElementId: '=',
			},
			link: function (scope, element, attrs) {
				element.on('click', function () {
					var pdfElementId = attrs.pdfElementId;
					var pdfName = attrs.pdfName;

					var elementToPdf = document.querySelector("[pdf-content=" + pdfElementId + "]");
					element.toggle('creating-pdf');
					ngDomToPdf.downloadElementToPdf(elementToPdf, pdfName).then(function () {
						element.toggle('creating-pdf');
					})
				})
			}
		};
	}
})();