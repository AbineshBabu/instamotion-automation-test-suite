export class Utility {

    getKilometerMetric(kilometer) {
        return this.convertToFloat(kilometer.split(" ")[0]);
    }

    getPsMetric(ps) {
        return this.convertToFloat(ps.split("(")[1].split(" ")[0]);
    }

    getMonthlyPriceMetric(price) {
        return this.convertToFloat(price.split(" ")[1]);
    }

    convertToFloat(value) {
        return parseFloat(value);
    }

    getTestdataPsValue(value) {
        return this.convertToFloat(value.split(" ")[0]);
    }

    getTestdataKilomterValue(value) {
        return this.convertToFloat(value.split(" ")[0]);
    }

    getTestdataMonthlyPriceValue(value) {
        return this.convertToFloat(value.split(" ")[0]);
    }

}