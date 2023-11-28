export default function FileChecker(pdfLink) {
    fetch(pdfLink, {
        method: "HEAD",
    })
        .then((response) => {
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            return false;
        });
}
