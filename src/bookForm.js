const form = `<form class="container-md mt-5">
<div class="form-group">
  <label for="datetime">Select Day</label>
  <input type="datetime-local" class="form-control-lg" id="datetime">
</div>
<div class="form-group">
  <label>No. People</label>
  <select class="form-control">
    <option>2-4</option>
    <option>4-6</option>
    <option>8-10</option>
    <option>10+</option>
  </select>
</div>
<div class="form-group">
<label>Specific Requirements</label>
<textarea class="form-control" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">Confirm Reservation</button>
</form>`;

export default { form };