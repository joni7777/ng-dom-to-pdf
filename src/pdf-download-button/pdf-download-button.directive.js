(function () {
	'use strict';

	angular
		.module('pdfDownloadButton')
		.directive('pdfDownloadButton', pdfDownloadButton);

	pdfDownloadButton.$inject = ['ngDomToPdf'];

	function pdfDownloadButton(ngDomToPdf) {
		return {
			restrict: 'A',
			scope: {
				pdfName: '=',
				pdfElementId: '=',
				creatingPdfClassName: '='
			},
			link: function (scope, element, attrs) {
				element.on('click', function () {
					var pdfName = scope.pdfName;
					var pdfElementId = attrs.pdfElementId;
					var elementToPdf = document.querySelector("[pdf-content=" + pdfElementId + "]");
					var creatingPdfClassName = attrs.creatingPdfClassName || "creating-pdf";

					element.toggleClass(creatingPdfClassName);
					ngDomToPdf.downloadElementToPdf(elementToPdf, pdfName)
						.then(function () {
							element.toggleClass(creatingPdfClassName);
						})
						.catch(function () {
							element.toggleClass(creatingPdfClassName);
						})
				})
			}
		};
	}
})();