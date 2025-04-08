<script setup>
const props = defineProps({
  einheit: {
    type: String,
    default: "",
  },
  siEinheit: {
    type: String,
    default: "no",
  },
  zeichen: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="info-box">
    <table>
      <tbody>
        <tr>
          <th>Einheit</th>
          <td>
            <a :href="'einheiten#' + props.einheit">{{ props.einheit }}</a>
          </td>
        </tr>
        <tr>
          <th>Formalzeichen</th>
          <td>{{ props.zeichen }}</td>
        </tr>
        <tr>
          <th>SI-Einheit</th>
          <td>{{ props.siEinheit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
