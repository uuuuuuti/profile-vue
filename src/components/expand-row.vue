<style scoped>
    .expand-row{
        margin-bottom: 8px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="24">
                <span class="expand-key"><Tag color="blue">摘要：</Tag></span>
                <span class="expand-value">{{ row.summary }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key"><Tag color="blue">分类:</Tag></span>
                <span class="expand-value">{{ row.categorys }}</span>
            </Col>
            <Col span="16">
                <span class="expand-key"><Tag color="blue">关键词:</Tag></span>
                <span class="expand-value">{{ row.keywords }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="24">
                <span class="expand-key"><Tag color="blue">机构:</Tag></span>
                <span class="expand-value">{{ row.orgNames }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="24">
                <span class="expand-key"><Tag color="blue">基金:</Tag></span>
                <span class="expand-value">{{ row.funds }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key"><Tag color="blue">下载量:</Tag></span>
                <span class="expand-value">{{ row.downloadNum }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key"><Tag color="blue">被引量:</Tag></span>
                <span class="expand-value">{{ row.quoteNum }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key"><Tag color="blue">二次引用量:</Tag></span>
                <span class="expand-value">{{ row.quote2Num }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="24">
                <span class="expand-key"><Tag color="blue">查看地址:</Tag></span>
                <span class="expand-value">{{ row.url }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
      props: {
        row: Object
      }
    }
</script>
